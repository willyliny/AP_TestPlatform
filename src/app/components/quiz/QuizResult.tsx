import React, { useState } from 'react';
import { Trophy, Target, Clock, RotateCcw, ChevronRight, Share2, MessageCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface QuizResultProps {
  totalQuestions: number;
  correctAnswers: number;
  answeredQuestions: Array<{
    questionId: number;
    isCorrect: boolean;
    timeSpent?: number;
  }>;
  onRestart: () => void;
  onSelectChapter: () => void;
  chapterName: string;
}

const QuizResult: React.FC<QuizResultProps> = ({
  totalQuestions,
  correctAnswers,
  answeredQuestions,
  onRestart,
  onSelectChapter,
  chapterName,
}) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const accuracy = (correctAnswers / totalQuestions) * 100;
  const totalTime = answeredQuestions.reduce((acc, curr) => acc + (curr.timeSpent || 0), 0);
  const averageTime = totalTime / answeredQuestions.length;

  const getGradeText = (score: number) => {
    if (score >= 90) return '優秀';
    if (score >= 80) return '良好';
    if (score >= 70) return '不錯';
    if (score >= 60) return '及格';
    return '需要加油';
  };

  const getGradeColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-blue-500';
    if (score >= 70) return 'text-yellow-500';
    if (score >= 60) return 'text-orange-500';
    return 'text-red-500';
  };

  const getGradeEmoji = (score: number) => {
    if (score >= 90) return '🏆';
    if (score >= 80) return '🌟';
    if (score >= 70) return '👍';
    if (score >= 60) return '💪';
    return '📚';
  };

  const handleDiscordShare = async (name: string) => {
    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      toast.error('Discord webhook URL 未設定');
      return;
    }

    const message = {
      embeds: [{
        title: `${getGradeEmoji(score)} 程式學習測驗結果`,
        description: `**${name}** 完成了 **${chapterName}** 的測驗！`,
        color: score >= 90 ? 0x2ecc71 : score >= 80 ? 0x3498db : score >= 70 ? 0xf1c40f : score >= 60 ? 0xe67e22 : 0xe74c3c,
        fields: [
          {
            name: '📊 成績統計',
            value: [
              `> 總分：**${score}%** (${getGradeText(score)})`,
              `> 答對題數：**${correctAnswers}/${totalQuestions}**`,
              `> 正確率：**${accuracy.toFixed(1)}%**`,
            ].join('\n'),
            inline: false
          },
          {
            name: '⏱️ 時間統計',
            value: [
              `> 總耗時：**${Math.round(totalTime)}** 秒`,
              `> 平均每題：**${Math.round(averageTime)}** 秒`,
            ].join('\n'),
            inline: false
          },
          {
            name: '📝 詳細答題',
            value: answeredQuestions.map((q, i) => 
              `> Q${q.questionId}: ${q.isCorrect ? '✅' : '❌'} ${q.timeSpent ? `(${Math.round(q.timeSpent)}秒)` : ''}`
            ).join('\n'),
            inline: false
          }
        ],
        footer: {
          text: '💡 持續學習，不斷進步！'
        },
        timestamp: new Date().toISOString()
      }]
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error('Failed to send to Discord');
      }

      toast.success('結果已成功分享到 Discord！');
      setIsShareModalOpen(false);
    } catch (error) {
      console.error('Error sharing to Discord:', error);
      toast.error('分享到 Discord 時發生錯誤');
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
            <Trophy className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{chapterName} 完成！</h2>
          <p className="text-gray-600">讓我們來看看你的表現</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="mb-2">
              <Target className="w-8 h-8 text-blue-500 mx-auto" />
            </div>
            <div className={`text-3xl font-bold mb-1 ${getGradeColor(score)}`}>
              {score}%
            </div>
            <div className="text-sm text-gray-600">總分</div>
            <div className={`text-lg font-medium mt-2 ${getGradeColor(score)}`}>
              {getGradeText(score)}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="mb-2">
              <Target className="w-8 h-8 text-green-500 mx-auto" />
            </div>
            <div className="text-3xl font-bold mb-1 text-green-500">
              {correctAnswers}/{totalQuestions}
            </div>
            <div className="text-sm text-gray-600">答對題數</div>
            <div className="text-lg font-medium mt-2 text-green-500">
              {accuracy.toFixed(1)}% 正確率
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="mb-2">
              <Clock className="w-8 h-8 text-purple-500 mx-auto" />
            </div>
            <div className="text-3xl font-bold mb-1 text-purple-500">
              {answeredQuestions.length}
            </div>
            <div className="text-sm text-gray-600">完成題數</div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">答題分析</h3>
          <div className="space-y-3">
            {answeredQuestions.map((question, index) => (
              <div
                key={`${question.questionId}-${index}`}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-4"
              >
                <div className="flex items-center">
                  <span className="text-gray-600 mr-4">題目 {question.questionId}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      question.isCorrect
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {question.isCorrect ? '答對' : '答錯'}
                  </span>
                </div>
                {question.timeSpent && (
                  <span className="text-gray-500 text-sm">
                    耗時 {Math.round(question.timeSpent)}秒
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onRestart}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            重新開始
          </button>
          <button
            onClick={onSelectChapter}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            選擇其他章節
          </button>
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            分享至 Discord
          </button>
          <button
            onClick={() => {
              const shareText = `我在程式學習測驗中獲得了 ${score}分！\n正確率: ${accuracy.toFixed(
                1
              )}%\n答對: ${correctAnswers}/${totalQuestions} 題`;
              if (navigator.share) {
                navigator.share({
                  title: '程式學習測驗結果',
                  text: shareText,
                });
              } else {
                navigator.clipboard.writeText(shareText);
                alert('結果已複製到剪貼簿！');
              }
            }}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            分享結果
          </button>
        </div>
      </div>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-white">分享到 Discord</h3>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="請輸入你的名字"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg mb-4 
                focus:outline-none focus:ring-2 focus:ring-blue-500
                text-white bg-gray-700
                placeholder:text-gray-400 
                text-base"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => handleDiscordShare(userName)}
                disabled={!userName.trim()}
                className="px-4 py-2 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                傳送
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Toaster position="bottom-right" />
    </>
  );
};

export default QuizResult;