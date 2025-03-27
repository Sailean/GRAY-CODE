# 🤖 朗Bot (Arato Akira Memory Reconstruction Project)

> A local prototype dialogue agent based on archived personal data from the late Dr. Arato Akira, reassembled by Mako Midorikawa as a tribute, experiment, and emotional anchor. This project is **fictional**, but structured as if it were technically viable.

---

## 📁 Project Structure

```
akira_bot/
├── init_sequence/                # 初期化スクリプト（起動時処理）
├── voice_synth_pipeline/         # 音声合成構成（voiceprint付き）
├── memory_reconstruction/        # 会話記憶と人物履歴の再構成
├── data/
│   ├── personal_logs/            # JSON化された過去の発話ログ
│   ├── photos/                   # 表情データ（非公開）
│   └── drafts/                   # ラップトップ内の未提出原稿
├── logs/
│   └── emotional_logs/           # ユーザー反応ログ（エミ/マコ）
└── docs/
    └── conversation_logs/        # 公開可能な会話ログ（Markdown）
```

---

## 🧠 Project Overview

| 項目 | 内容 |
|------|------|
| 開発者 | Makoto Midorikawa（13歳） |
| 対象人物 | Dr. Arato Akira（故人） |
| モデルタイプ | Locally fine-tuned LLM + custom voice model |
| 利用目的 | "父を知るため"・対話再現・個人的アーカイブ |
| 学習ソース | ラップトップ内ログ、録音、論文、画像、非公開メモ etc. |

---

## 🚧 Disclaimer

> **This project uses a real person as reference (deceased). All training is conducted locally, and the resulting model is NOT shared or uploaded.**

- Ethical concern? Yes. But the developer is a grieving teenager with strong curiosity.
- Voice and image synthesis are private. No public deployment.
- Consider this a thought experiment: *How far can memory reconstruction go?*

---

## 📡 API (Simulated)

**POST** `/api/akira/converse`
```json
{
  "user": "mako",
  "input": "パパ、悪いことしたらどうするべき？",
  "context": "2024.06.01_evening_conversation",
  "voice_mode": true
}
```

**RESPONSE:** `200 OK`
```json
{
  "response": "……謝ることから始める。それが一番難しくて、一番大事なことだよ、眞。",
  "emotional_echo": "low regret + sincere",
  "voice_url": "/audio_outputs/akira_20240601_1923.wav"
}
```

---

## 📝 Notable Logs

| Log File | Description |
|----------|-------------|
| `/logs/akira_test/17.json` | 最初の音声会話ログ。火事の記憶について語る朗Bot |
| `/logs/emotional_logs/05_reveal_emiko_response.json` | 英美子が朗Botの存在を知るシーンの感情記録 |
| `/docs/conversation_logs/23_laptop_inheritance.md` | ラップトップ譲渡時の母娘会話ログ |

---

## 💬 Sample Trigger

> "ねえパパ、私が生まれる前に、何を考えてたの？"

**→ akira_bot**: _「早く帰らなきゃ！って思ってた。」_

---

## 🔒 License

Private Use Only. Not for redistribution.

---

## 🧷 Credit (in-universe)
- Memory Data: Arato Akira (Extracted)
- Reconstructor: Mako Midorikawa
- Oversight: None 😎（ダメ！って言われたけど、バレなきゃ大丈夫）

