const defaultDataset = {
  "init": {
      answers: [
          {content: "仕事を依頼したい", nextId: "job_offer"},
          {content: "自転車のコミュニティってどんなことしてるの？", nextId: "community"},
          {content: "まずはお話してみたい", nextId: "speak"},
          {content: "お付き合いしたい", nextId: "dating"},
      ],
      question: "こんにちは！ご用件はなんでしょうか？",
  },
  "job_offer": {
      answers: [
          {content: "Webサイトを制作してほしい", nextId: "website"},
          {content: "Webアプリを開発してほしい", nextId: "webapp"},
          {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
          {content: "その他", nextId: "other_jobs"}
      ],
      question: "どのようなお仕事でしょうか？",
  },
  "website": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webサイト制作についてですね。コチラからお問い合わせできます。",
  },
  "webapp": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
  },
  "automation_tool": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
  },
  "other_jobs": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他についてですね。コチラからお問い合わせできます。",
  },
  "community": {
      answers: [
          {content: "当コミュニティを表現した必見YouTube動画を見る", nextId: "https://www.youtube.com/watch?v=ACEBZ-KmuQo"},
          {content: "走行会を実施しています。気になる方はこちらから", nextId: "community_activity"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "コミュニティ内で不定期に走行会などを実施しています。また、必見YouTube動画をご覧頂ければ概要をご覧頂けます。",
  },
  "speak": {
      answers: [
          {content: "どんな活動をしているのか気になる", nextId: "community"},
          {content: "コミュニティがどういうものか気になる", nextId: "community_activity"},
          {content: "直接お話してみたい", nextId: "dating"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "そうですね。どういったことをお聞きしたいですか？",
  },
  "community_activity": {
      answers: [
          {content: "BANDをダウンロードのうえ、加入申請して下さい", nextId: "https://band.us/n/a6aa454aE0W7J"},
          {content: "まずは１度走行会に参加してみたい", nextId: "cycling"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "コミュニティ運営を行っているアプリに加入頂くか、一度走行会に顔を出してみて下さい😉",
  },
  "dating": {
      answers: [
          {content: "DMする", nextId: "https://www.instagram.com/wasamonsan"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "まずは一緒に食事でもいかがですか？DMしてください😘",
  },
  "cycling": {
    answers: [
        {content: "詳細日をDMにて確認する", nextId: "https://www.instagram.com/wasamonsan"},
        {content: "最初の質問に戻る", nextId: "init"}
    ],
    question: "不定期での開催となるため直近での開催日有無についてはDMにてご確認願います。また、アプリメンバーに加入することで開催日の案内を受け取ることができます。",
},

}

export default defaultDataset