---
title: "True Ghost Relay — v3 (Semi-Underground Relay Kill)"
version: "v3.0"
event_date: "2003-05-04"
event_time_local: "02:15 AFT (UTC+04:30)"
location: "Wakhan Corridor (AFG–TJK border), hillside site on AFG side"
geo_wgs84: "37.05N, 73.64E (±0.10° fuzz)"
elevation_m: 3900
canon_lock: "GR-v3"
tags: [SIGINT, relay-kill, EMCON, REKEY-45, VT, low-profile-dish, bunker]
---

# GhostRelay — Δt正史最新版（2003/春〜秋）

> ・時代／場所：2003年5月4日、ワハーン回廊（アフガン—タジク国境）
https://maps.app.goo.gl/jWZaZ7Lav52wbSMt8
夜間行動
・任務：旧ソ連製リレー「KX-11」を**機能破壊（feed/LNA/PA/皿のデアライン）**し、鍵／媒体を回収。シグネチャ最小で撤収。**FALCON Two（Kevin）**のウィンドウでエグザクト。
・無線：REKEY基準60s。現地変更 REKEY DELTA −45 → 旧新ネットが一時分断（“dead air”）。EMCON。PACE＝PRC-148 VHF／VHF予備／PRC-117F SATCOM／PRC-112 SAR。
・脅威：対岸稜線のFO。初弾は120mm迫撃（VT／時限）空中炸裂。のち遠方の誤認CAS（“空の第二の裂け目”）。
・呼出符号／役割：
　GHOST（Michael, TL）
　CIPHER（Sidney, 18E/25U系・無線）
　ECHO（Lily、「四五」・メディアに触れない）
　SPECS（スナイパー・早期KIA）
　BRICK（爆処・機能キル担当）
　PATCH（衛生・“make minutes”）
　BRAVO（GPSDO/Δt・父子緊張）
　FALCON Two（Kevin・回収）

カノン・ロック：UAV=ISRのみ（誘導なし）／ジャミング無し／PTSD核＝Sidの“−45”と生存罪責。

## Site (v3)

旧ソ連系の山岳中継は、**尾根斜面に掘られた半地下の機器壕**と、外に露出した**低背パラボラ×2**（対向リンク／ホットスタンバイ）で構成されていた。地表に出ているのは短いマスト、ケーブル貫通部の防水グランド、そして**通風筒**だけ。夜間の上空からは農業小屋や焚火の点在に紛れ、**視認性は極端に低い**（＝誤認を誘う）。

### Functional Kill (v3)
1) **feed**：低背皿の裏に回り、feed周りを作業（保護維持のまま微調整誘発）。  
2) **LNA**：ケーブル貫通部のシールを切り、**半地下機器室**のLNAラックで入力側をオープン→**利得断**。  
3) **PA**：PA段の電源／インライン保護を落とし、**送信側のみ沈黙**。  
4) **Dish de-align**：支持架台の**ストッパーボルト**を一段抜いて**±0.6–1.2°**の角度ずれ→リンク崩壊を確実化。

### Mis-ID Logic
夜間上空から見えるのは**点在する熱源**（通風筒の排気・発電機の温排気・点検灯）だけ。**構造物の背が低く、皿も地肌に溶ける**ため、遠距離の味方機からは**民生の小屋や焚火**と紛れやすい。音だけが遅れて山を渡り、「**空の第二の裂け目**」として誤認される。


# Operating Picture（ASCII｜v3）

                         N
                         ^
                         |
 Opposite Ridge (FO)  ^  |    (binos / VHF)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                       \
                        \      TRP: RIDGE-SADDLE
 scree slope             \____________________
 -------------------------\____ ridge break ___\____
       [Dish A]   [Dish B]    ← low-profile twin link / hot-standby
            \        /
             \      /
          [BUNKER DOOR]
          [VENT↑]  [VENT↑]       (short mast stubs, cable glands)
          [GEN/EXH]  ~~~ warm plume

> 通信：**REKEY DELTA −45**＝「**45秒後に無言で新ネットへ切替**」／**EMCON（沈黙）**優先  
> 脅威：**UAV＝見張り（ISR）**。**火力は地上発射（120mm迫撃弾（VT/時限）**——結果として“上から降る”
> 通信：**REKEY DELTA −45**＝「**45秒後に無言で新ネットへ切替**」／**EMCON（沈黙）**優先  
> 脅威：**UAV＝見張り（ISR）**。**火力は地上発射（120mm迫撃弾（VT/時限）**——結果として“上から降る”  
 火力ロジック
  初撃：対向稜線の観測OP→120mm迫撃砲のVT/時限で空中炸裂（＝上から降る）。
  後段：上層部の誤認CAS（JDAM等）をT+10〜20分の“上空の空振り／二度目の空の割れ”として遠景に。
> 結果：**Sid（CIPHER）のみ生還**（鍵・媒体・ログを持ち帰り）

---

# 💥 ミッション構造（正史 v2 / 2003）

- **部隊**：米陸軍特殊部隊（ODA）  
- **位置**：パミール高原・ワハーン回廊付近（タジキスタン側国境地帯）  
- **作戦目標**：敵勢力が占有する旧ソ連通信中継基地 **“KX‑11 Relay”** の**機能停止**（破壊ではなく“無力化”）  
- **背景任務**：基地は**米/NATOの民間監視作戦**にも絡み、一部上層は“事故処理”を容認する空気

> **要約**：夜の“短い電波の窓”で**通信メタ情報**を掴み、**鍵/媒体**を塔・VSATから回収。  
> **派手な爆破は避け**、**feed/LNA/PA/皿アライメント**を潰して**機能を止める**。**痕跡最小**で離脱。  
> **REKEY DELTA −45**＝「**45秒後に無言で新ネット切替**」。**EMCON（沈黙）**を優先。

---

## 敵の想定
- **観測OP**：対向稜線に前進観測員（双眼鏡/無線/方位盤）
- **間接射撃**：**120mm迫撃砲**（**VT**または**時限信管**で**空中炸裂**）
- **伏兵**：崖下に12（冷えでサーマルに薄い）

## 味方の構成（コール・主要担当）
- **GHOST（隊長）**：全体統制／**親指承認**／「Stay on the net」
- **CIPHER（通信）**：**REKEY−45**、鍵/媒体抽出、EMCON管理
- **ECHO（通信補）**：スロット取り／媒体受け渡し／「Verify, Cut‑Hold」
- **SPECS（狙撃）**：**crest −1 body**で監視（初弾KIA）
- **BRICK（爆薬）**：**feed/LNA/PA**無力化／皿アライメント外し
- **PATCH（衛生）**：止血・気道・搬送の秒を作る
- **BRAVO（若手/GPSDO）**：Δt ログ／ナビ／タイムキーパー
- **FALCON Two（Kevin）**：FARP待機→窓で ROZ 進入→収容（JPRC経由）

## 交戦のロジック（正史）
1. **REKEY**：共有=60秒 → 現場判断で **−45**（親指承認）。**旧/新ネット**が数十秒だけ分断＝**〈死んだ空〉**。
2. **初撃**：観測OPが TRP 登録→**120mm**を**VT/時限**で空中炸裂。**鋼片の雨**で救護/抽出が遅延。
3. **目的達成**：鍵/媒体の回収、**機能無力化**（feed/LNA/PA/皿）完了。
4. **後段**：上層の**誤認CAS**（地域無力化）許可。遠雷のような“第二の空の割れ”。

## OPSEC 備考
- **ジャミング**は未使用。**沈黙＝合図**。
- **UAV/ISR**は**見張りのみ**（誘導はしない）。

---

## 1) メンバーと来歴（更新）

| Call-sign | 氏名・年齢 | 役割 / 得意 | 来歴・個性（短） |
|---|---|---|---|
| **GHOST** | マイケル・ロザリオ /Michael R., 43s | 隊長（TL）/ 最小語で統率 | 歴戦。親指の承認。「Stay on the net」。露見抑止を徹底。 |
| **CIPHER** | シドニー・グレイソン / Sidney Grayson, 31s | 副長 / 18E / 現場SIGINT | 所作で統率（角度が先、言葉は後）。**REKEY運用**に熟練。 |
| **ECHO** | リリー・メナ / Lily M., 28s | SIGINT / CIPHERの部下 | 名詞＋一語。「四五」「鍵は塔」。媒体の確保〜手渡しが持ち場。 |
| **SPECS** | ルーカス・チェン / Chen, 31s | Overwatch / DM | crest **−1 body**の観測手。**敵の向き**を先に固定。 |
| **BRICK** | ダニエル・バーロウ / Barlow, 38s | 侵入・爆薬 | **機能否定**を派手さ最小で遂行。敵圧下でも決断が速い。 |
| **PATCH** | トミー・レイノルズ / Reynolds, 33s | 衛生（MEDIC） | 砂漠救急。**秒を作る**。禁酒継続中（自戒）。 |
| **BRAVO** | カイル・ロス / Kyle Ross, 20s | NAV/Time補助（SOT‑A相当） | **GPSDO＋時刻ログ**でΔtを担保。父は技術上層——“入れられた”若手。 |


---
### 💥ミッション構造

- **部隊：米陸軍特殊部隊グリーンベレー（ODA）**
- **位置：パミール高原のワハーン回廊付近／タジキスタン側の国境地帯**
- **任務：敵（テロ組織＋某国支援組織）が占拠する旧ソ連中継基地“KX-11 Relay”の機能停止（無力化）**
- **背景任務（士官たちの陰謀）**：その基地は**米・NATOの民間監視作戦**にも関与しており、上層部の中には“事故で処理されること”を容認する者もいた。


> **ミッション要約**：夜の“短い電波の窓”に合わせて、敵の通信の**メタ情報**を掴み、**鍵／媒体**を**塔・VSAT**から回収。  
> 派手に爆破せず**機能を止める**（フィード/LNA/PA/皿アライメント）。**痕跡最小**で離脱。  
> **REKEY DELTA −45**＝「**45秒後に無言で新ネットへ切替**」。**EMCON**（沈黙）優先。

---

# Δt / Ghost Relay — 役割カード（読みやすい要約）

---

## Michael（GHOST｜隊長 マイケル・ロザリオ /Michael R., 43s）
- **役割**：静かな司令塔。最小語で承認・抑止（**親指承認／Stay on the net／離脱窓の管理**）。
- **任務中の動き（かんたん）**：露見抑止（稜線直上禁止／キルフラッシュ確認）→進入→接触時は**姿勢制御と安全確保**。
- **成功**：隊の意図を崩さず維持。**T±0でシドを庇い生存を確保**。  
- **象徴アクション**：**DOWN! → 覆いで破片から遮蔽**。  
- **結末**：致命傷で戦死（隊の“軸”として機能し切った）。

---

## Sidney（CIPHER｜副長 18E Sidney Grayson, 31s）
- **役割**：通信・SIGINTの実務責任。電子戦（EW）支援装備の扱い。**Echoの上司**。所作で統率（**角度が先、言葉は後**）。
- **任務中の動き**：
  - **REKEY−45実施、EMCON、鍵/媒体抽出、Check—5×5**（現場の**音声／画像ログを本部へ転送するが、REKEY窓の混線で一部不達／リンク途絶）。
  - **歯抜け**の監視／**鍵・媒体**の回収指揮／**痕跡処理**／**単独離脱**。
 - **成功**：**電波メタ**を掴み、**鍵・媒体**を確保、**機能否定**を達成。**唯一の生還者**。  
 - **自責の核**：**−45の圧縮**→**dead air（死んだ空）**→初弾、という因果。

 # PACE / REKEY / EMCON（実装メモ）

 - **PACE**
  - P: SINCGARS VHF（PRC‑148）GhostNet‑1
  - A: VHF Backup
  - C: SATCOM（PRC‑117F）
  - E: SAR Beacon（PRC‑112系バースト）→ JPRC 経由でAMCへ

 - **REKEY**
  - 共有：60秒
  - **現場判断**：**REKEY DELTA −45**（親指承認）
  - リスク：**旧/新ネット分断＝〈死んだ空〉**（数十秒）
  - 復帰：**Check—5×5** 最小確認のみ

 - **EMCON**
  - 窓中は**無送話**。必要時は**掌/指の合図**。
  - “ジャミング”は**不使用**（沈黙＝約束）。

  ・個人の因果＝REKEY−45 → dead air → 初弾 → 救護遅延（＝シドの自責コア）。
  ・政治の因果＝誤認CAS（＝上層の“上塗り”）。
 　　読後の二段燃え：1周目は「俺のせい」。2周目で「俺だけのせいじゃない」。
  　　→後年（2005年）のリーク断片の燃料：AARの黒塗りからTRPとVTだけ透ける／別紙でCASの承認ログに薄い影。

---

## Lily “Echo”（SIGINT｜Sidの部下 リリー・メナ / Lily M., 28s）
- **役割**：電波の“窓”を捉える**耳**。報告は**名詞＋一語**（「四五」「鍵は塔」）。
- **任務中の動き**：**最初の安定（45秒）**で**スロット／癖**を掴む→**塔で媒体（鍵）受信スロット掴み**→**Sidへ手渡し、Verify→Cut‑Hold、媒体ハンドオフ**。
- **成功**：**鍵・媒体※の引き渡し**で作戦価値の**中心**を成立させる。最後に**「Verify, Cut‑Hold」**を残す。  
- **結末**：重傷で死亡。最後まで**通信兵**。
※媒体＝暗号鍵や設定が入った実体（モデム/メモリ/カード）
---

## Brick（BREACH｜侵入・爆薬  ダニエル・バーロウ / Barlow, 38s）
- **役割**：侵入・破壊の担当。**C4配置／デト**。
- **任務中の動き**：塔の**C4を適所に設置**→敵圧下でも**起爆を決断**。
- **成功**：フィードとLNA/PAを潰し、皿の向きを外す＝機能否定を達成（派手さ最小）。  
- **結末**：戦死。だが**塔の“口”を閉じた**。

---

## SPECS（スナイパー｜狙撃　ルーカス・チェン / Chen, 31s）
- crest −1 body、監視（初弾KIAのビート）

---

## Patch（MEDIC｜衛生 トミー・レイノルズ / Reynolds, 33s）
- **役割**：救護と“秒の確保”。
- **任務中の動き**：**掩護→制止**で味方を**低姿勢**に戻す→**救命の余白**を作る。被弾。
- **成功**：**数十秒**を捻出。それが**Brickの起爆**や**Sidの回収・処置**に繋がる。  
- **結末**：止血帯高位、圧迫包帯、気道、搬送の“分”を作るが戦死。**時間**を残した。

---

## BRAVO（若手/GPSDO　カイル・ロス / Kyle Ross, 20s）
- Δtログ、ナビ、ペース管理

---

## FALCON Two（Kevin　ケビン・マッケンジー / Kevin, 35s）
- FARP→ROZ（窓）→収容（JPRC経由）、Need-to-Knowで成果のみ通告

---

## チームとして“持ち帰ったもの”（成果）
- **情報の入口**：**メタ（時間・波形・Δt）**＋**鍵・媒体** → **解析の土台**。  
- **機能否定**：塔／VSATは**当面使えない状態**（再現に時間と資材が要る）。  
- **痕跡最小**：露見サインを抑えた運用で**証拠を残さず離脱**。  
- **証言**：**Sidが唯一の生還者**として**経緯と成果**を語れる。

---

### ぶっちゃけ1行版（一般読者向け）
- **Michael**：隊の軸を守り、**身を張って人を残した**。  
- **Sid**：**仲間の遺髪、ブリックの焦げた耳と鍵を持ち帰った**（代償＝自責）。  
- **Lily**：**鍵を託し切った通信兵**。  
- **Brick**：**壊すべきを壊して機能を止めた**。  
- **Patch**：**秒を作って仲間につないだ**。

> 読み方TIP：本文に迷ったら、**REKEY（45秒の沈黙）→“空”→初弾**という**因果線**を思い出すと全体が見通せます。


---

## SPECS（ルーカス・チェンスナイパー｜／観測）
- **役割**：観測・気象／弾道補正、対物監視。稜線“直上”は禁止、**肩ひとつ下**のOP設置。
- **任務中の動き**：中継塔方向の**RF散乱と“歯抜け”**を観測ログ化／風・密度高度の補正を隊に配布。
- **成功**：**初期兆候の見極め**（“歯抜け”が立つ時間帯）で接近ルートと姿勢を正しく選ばせた。
- **結末**：**カウンタースナイパー初弾でKIA**（＝**REKEY共有の薄さ→“死んだ空”**の結果を象徴）。

---

## BRAVO（Kyle Ross｜若手／Nav・計測）
- **役割**：**GPS差分／UWB校正／地上ビーコン**のセットアップ。移動時の**現在地信頼度**を上げる係。
- **背景**：父は調達系の上級士官。**“現地評価要員”として臨時帯同**（政治の匂い）。
- **任務中の動き**：**ベースライン確立／誤差補正**、隠蔽された光ファイバ節点の**位置ズレ**に違和感をメモ。
- **成功**：**行軍と離脱の位置精度**を押し上げた（LZ判断にも寄与）。
- **結末**：**Day-2 IEDでKIA**（155mm圧力起爆）。“**良い若さ**”の喪失が隊へ重く刻まれる。


---

## 2) 集合場面（ブリーフ抜粋｜赤灯）
**GHOST**は折り畳み図に**小さな赤×**を打ち、指先で稜線をなぞる。  
「**零二一五 ± 十**。週三。**歯抜け**の櫛だ」

**SPECS**は黙って**キルフラッシュ**を回し、**crest −1 body**の位置を目で取る。  
**GHOST**「**稜線直上は禁止**。**肩ひとつ下**」

**ECHO**「**受信一分想定**。**最初の安定＝四五**で畳みます」  
**CIPHER**は**PRC‑148**に一度だけ**REKEY DELTA −45**を灯し、**囁き**で落とす。  
「**Compress, four‑five**」／**GHOST**の**親指**が上がる。  
**（注）UAVは見張り。誘導はしない。**  
**GHOST**「**弾は地上**から来る。**120mm迫撃弾**。**面で降る**」

**BRICK**が短く笑う。「派手は無し。**口（feed）を潰して、皿の向きを外す**」  
**PATCH**は頷くだけ。**止血帯**を手の届く所へ移す。

**BRAVO**は**GPSDO**のロック表示を確認し、**ログの時刻**を**ECHO**に渡す。  
**ECHO**は受け皿として**媒体ライン**を整え、**CIPHER**へ視線だけ送る。

> *BRAVO（心の声）*：「父さん、俺は**ログ**を残す」  
> *父の声（記憶）*：「**現場は評価の場じゃない。お前は“Δt”だけ運べ。英雄は要らない**」

**GHOST**「**Stay on the net**」  
赤灯のテントから、風の弱い夜へ出る。砂は音を吸う。


# Operation Ghost Relay — 1-Page Brief (v3)

**When**: 2003‑09‑12, 02:15 AFT (UTC+04:30) — window ±10 min  
**Where**: Wakhan Corridor (AFG side, near AFG–TJK border), hillside semi‑underground relay site  
**Geo**: WGS84 37.05N, 73.64E (±0.10° fuzz), Elev ~3,900 m  

**What**: Functionally neutralize **KX‑11 Relay** (feed/LNA/PA/dish de‑align); recover keys/media; minimal signature; exfil via **FALCON Two**.

## Signal Plan (PACE)
- P: SINCGARS VHF (PRC‑148) GhostNet‑1
- A: VHF Backup
- C: SATCOM PRC‑117F
- E: PRC‑112 SAR burst (via JPRC)

**REKEY**: base 60s → **DELTA −45** (thumb‑to‑thumb). **EMCON** during window. Expect **dead air**.

## Threat
- FO on opposite ridge → **120mm VT/time airburst**
- Low visual signature site → **distant misidentified CAS (“second crack in the sky”)**

## Tasks by role
- **CIPHER**: keys/media; REKEY/EMCON; confirm net (“Check—5×5”).
- **ECHO**: slot timing; “Verify, Cut‑Hold”; handoff custody.
- **BRICK**: feed/LNA/PA kill; dish de‑align; no fireworks.
- **PATCH**: tourniquet high and tight; airway; minutes to move.
- **SPECS**: crest −1 body; early KIA (narrative beat).
- **BRAVO**: GPSDO lock; Δt log; pace board.
- **GHOST**: stay on the net; exfil window control.


# Operation Ghost Relay — 1-Page Brief (v2)

**Where**: Wakhan Corridor (Afghanistan/Tajik border) — high plateau, sandstone ridges  
**Who**: US Army SF (ODA) — GHOST, CIPHER, ECHO, SPECS, BRICK, PATCH, BRAVO / Pickup: FALCON Two  
**What**: Functionally neutralize **KX‑11 Relay**; recover keys/media; leave minimal signature; exfiltrate.

## Signal Plan (PACE)
- P: SINCGARS VHF (PRC‑148) GhostNet‑1
- A: VHF Backup
- C: SATCOM PRC‑117F
- E: PRC‑112 SAR burst (challenge / reply via JPRC)

**REKEY**: base 60s → **DELTA −45** (thumb‑to‑thumb). **EMCON** during window. Expect **dead air**.

## Threat
- FO on opposite ridge → **120mm VT/time airburst** over tower foot
- 12x ambush below cliff, acclimated (cool → thin on thermal)

## Tasks by role
- **CIPHER**: keys/media; REKEY/EMCON; confirm net (“Check—5×5”).
- **ECHO**: slot timing; “Verify, Cut‑Hold”; handoff custody.
- **BRICK**: feed/LNA/PA kill; dish de‑align; no fireworks.
- **PATCH**: tourniquet high and tight; airway; minutes to move.
- **SPECS**: crest −1 body; early KIA (narrative beat).
- **BRAVO**: GPSDO lock; Δt log; pace board.
- **GHOST**: stay on the net; exfil window control.

---

## 3) 💥事故の流れ（最もリアルな流れに修正）：

1. 施設内部に進入し、機能無力化成功（feed/LNA/PA無力化＋皿オフポイント）
2. 外部から敵の伏兵と間接射撃（120mm空中炸裂） → 急遽撤退
3. **上層部が「施設機能停止（破壊と誤認）・隊は全滅」と判断し、エリアに空爆を許可**
4. **マイケルが重傷のシドニーを庇って爆風に巻き込まれる**
5. シドニーは意識を失い、数日後ケビンの独断によるヘリで回収される

---

# Timeline（T-60 → T+）

- **T−60**：REKEY窓=60を共有（口頭復唱は避け、親指で承認）
- **T−45**：現場判断で**DELTA −45**（〈死んだ空〉のリスクを許容）
- **T±0**：**120mm VT/時限の空中炸裂**（TRP=TOWER‑FOOT）
- **T+02〜06**：救護・抽出の遅延／鍵・媒体の確保／機能無力化完了
- **T+10〜20**：**誤認CAS**（遠雷のような第二の空の割れ）
- **EXFIL**：JPRC→AMC→FALCON Two 収容（FARP往復で窓運用）

---

## 🧠 PTSDの“現実的トリガー”構造
- 爆風と熱で焼かれた**マイケルの遺体を背負って下山**
- **無線に残るSPECSの叫び**： 
    「基地内部に仲間がいるんだぞ！おい、俺たちはまだ──！ HQ、応答しろ！！」
    →これをシドが聞いている、またはシドの録画？カメラ？音声？に残ってる
- 回収時、ケビンがぽつりと：「なぜだ、Sid…何があったんだ」

| 要素 | 内容 | 意味 |
| --- | --- | --- |
| 軍事リアル | グリーンベレー、EW、敵構造、通信断 → 空爆 | 軍事SFや元軍人の証言に即して描写可 |
| 感情リアル | **兄貴分の死、誤爆による見捨てられ感、通信兵の孤立** | PTSDが“感情起点”で自然に根づく |
| 社会リアル | 指令上層部の“不自然な沈黙”が後にシドを幻惑 | 陰謀論ではなく、現実の“グレー”として描ける |

---

## 4) 役割の“成功点”の位置づけ（要約）
- **SPECS**：**敵方向の事前固定** → **回避姿勢の立ち上がりが速くなる**（しかしH−0:18でKIA）。  
- **BRAVO**：**Δtログ／位置スタンプ** → **後段の解析可能性**を担保（機材はSidが回収）。  
- **ECHO**：**四五でスロット掴み** → **媒体の確保→受け渡し**。  
- **BRICK**：**機能否定（feed/LNA/PA/皿）**を達成。  
- **PATCH**：**秒を作る**（起爆や回収・処置へ繋ぐ）。  
- **CIPHER**：**REKEY−45運用／痕跡処理／離脱**を通し、**唯一の生還者**として成果を持ち帰る。  
- **GHOST**：**所作で隊の軸**を守り、**身を張って人を残す**。

---

## 5) 差分メモ（旧稿からの主な置換）
- **“JAMMER…”語 → 全削除**。**REKEY DELTA −45**（沈黙の約束）へ置換。  
- **UAV誘導** → **ISR（見張り）**に変更。火力は**地上発射（120mm迫撃弾）**。  
- **Overwatch**の立ち位置 → **crest −1 body**。**SPECSは初弾でKIA**。  
- **BRAVO**の役割 → **NAV/Time補助（GPSDO＋時刻ログ）**＋**父との軋み**は短い台詞で匂わせ。  
- **結末** → **生還はSidのみ**（鍵・媒体・ログの持ち帰りを明記）。

---

## 他) 
# 父⇄息子（BRAVO）の“匂わせ”台詞（そのまま挿入可）
- **BRAVO**
- **父（電話／記憶）**：「**現場は評価の場じゃない。お前は“Δt”だけ運べ。英雄は要らない**」  
- **息子＝BRAVO（独白／囁き）**：「**了解。俺はログを残す——父さんの名前がなくても**」


# OPSEC / Leak Handling（物語用のトーン指針）

- **Need‑to‑Know**：成果（被害/救出）は語る、**手順（REKEY手順・周波数・座標など）は伏せる**
- **噂はペンディング**：確証が積み上がるまで判定しない（Δtのモチーフ）
- **黒塗り**：TRP/VTなど“匂い”だけが残る演出は可

---

💡この構造を核にして、
- 兵士の苦悩
- 研究者の苦悩
- アキラ（新渡朗）との酒場の会話
- フラッシュバック
- 幻視（マイケルとの再会幻）
- アリサとの衝突
- セラピーでの開示
- ケビンとの酒場の会話　とかいろいろ書いて

 ストーリー全体を「断絶」そして「接続」と言う**一貫したテーマ（親子、男女、国家間、政治と現場、宗教、通信……etc.）で繋げる**。

---

小用語メモ

・REKEY：暗号鍵の更新周期。ずれは通話断に直結。

・EMCON：電磁放射管理。必要最小限の送信。

・PACE：Primary/Alternate/Contingency/Emergency無線優先。

・VT：近接信管。上空炸裂で破片を落とす。

・デアライン：アンテナ系の意図的ずらしによる機能殺し。