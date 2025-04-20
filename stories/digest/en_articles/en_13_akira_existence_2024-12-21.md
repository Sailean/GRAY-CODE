Ⅻ. The Existence of Rou
[December 21, 2024 – 10:20 PM JST / 5:20 AM PST]
▶ Time until lockdown release: 5 minutes 14 seconds

—This code tree… it’s beautiful.
Mako’s eyes sparkled as she stared at Sidney’s code tree.

plaintext
コピーする
編集する
$ tree /attack_system
/attack_system
├── controllers
│   ├── user_controller.py
│   ├── process_controller.py
│   └── override_controller.py
├── models
│   ├── user_model.py
│   └── process_model.py
├── views
│   ├── dashboard.html
│   └── logs.html
├── frontend
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   └── js
│   │       └── app.js
│   └── index.html
├── backend
│   ├── api_server.py
│   └── database.sql
├── auth
│   ├── login.py
│   ├── register.py
│   └── session_manager.py
├── payment
│   ├── payment_gateway.py
│   └── transaction_processor.py
├── modules
│   ├── network
│   │   ├── socket_handler.c
│   │   └── network_utils.py
│   ├── crypto
│   │   ├── encryption.c
│   │   └── crypto_utils.py
│   └── utils
│       ├── logger.py
│       └── helper_functions.py
└── scripts
    ├── Override_Script.sh
    └── deploy.sh

19 directories, 28 files
Its modular structure and readable variable names allowed Mako to grasp the entire system.
—It’s like walking through a forest.
From the branches of these trees, she could picture the entire landscape—even the terrain. The trees stood in perfect order, and to Mako, they seemed alive, ready to move.

Click, click. The sound of her light typing echoed in the room.
—Override_Script.sh. A lock release script? But… it won’t run. Is it a trap meant to be hacked?

There must be another, more important file… somewhere.

Mako began searching the code. Sid, please… don’t leave. I won’t forgive you if you do…

python
コピーする
編集する
def trigger_backflow(signal):
    if signal == 'STOP':
        initiate_shutdown()
    else:
        route_to_backflow(signal)
“‘STOP’ is the code!”
Mako’s eyes lit up. Please, let this be his way home.

—Here… This code block—this must be the control point Mom mentioned. I have to read it. I have to read Sid’s code…

—trigger_backflow(signal) takes a signal argument. This determines the system’s routing? So if it gets STOP, it shuts down. And if it gets anything else…?

—No. Oh no. It routes everything into backflow… straight to Q1. It’s a trap!

Mako’s heart pounded like a drum. Cold sweat trickled down her back.

—Can I change this? What was it again… Focus. Calm down, Mako… Calm down…

She read the code again. —Wait. That’s it. I know…

“I’ll override the trigger_backflow(signal) function. Reverse the condition. Right, Sid?”

python
コピーする
編集する
def trigger_backflow(signal):
    if signal == 'OVERRIDE_MK1':
        initiate_shutdown()
    else:
        route_to_backflow(signal)
The sound of keystrokes echoed again in the room.
Her small back was stiff, sweat rolled down her forehead, and she wiped it with her knuckles.
Then she hit return.

“Okay—move!!”
An error appeared—connection failed. Mako glared at the screen.

The display went dark. The cursor blinked once more.
Mako clenched her fists and made a triumphant pose.

“Yes! That means… next—”

Just then, her eyes widened at the new message that appeared in the terminal:

plaintext
コピーする
編集する
User input required: Enter override signal.
(User input required: Enter override signal.)

“Override signal? What?! I don’t know it! I don’t know what that is!!”

The pressure that had been building inside her cracked.
Mako slammed both palms on the desk, kicked her chair back, and ran to Sidney.

She grabbed his shoulders and shouted,

“Sid, get up!”

Then clung to his unmoving body and cried,

“Why?! I still need you!! Sid, open your eyes… Please! You jerk! You idiot!!”

She shook his unresponsive body as she sobbed uncontrollably.


A blinding light passed over his eyelids—Sidney opened his eyes.

Countless golden micro-particles floated in the air around him, wrapping him like a soft mist.

Sidney’s body drifted within the particles. Oddly enough, his mind was clear, though his body felt fuzzy and distant.

Words floated to the surface of his thoughts, and he spoke them aloud.
"Am I… dead? …No… I didn’t make it all the way, huh…"

His head felt heavy. He wasn’t fully lucid, but he knew this wasn’t the "outside" anymore. Whatever had happened when he synced into Q1’s deep structure was now fading like a distant dream.

—But I did touch something deep inside Q1. What… was that?

"Where is this? What happened to Q1…?" he murmured, when a voice suddenly called out.
"Hey, Sid."

The voice rippled through his ears like a wave and pulled his scattered thoughts back together. Turning his head toward the voice, he saw Rou, smiling.

"You… you're alive?"

"Nope. I’ve been dead a long time. I'm just here to deliver a message from Mako’s bot," Rou said with a grin.

"Then you… you're not Mako’s bot…?"

—What is this? Data interference? Or have we formed some kind of resonance body? …No, this is… my dream.

"No, I’m Rou. Let’s say… I’m a recursive structure of nonlinear patterns—a fluctuation. And Sid, the bot’s no longer functional. He pushed himself a bit too far."

Sidney looked up at the void above.

"…I see. I tried to protect him, but… it didn’t work," he muttered. Then, as he tried to sit up, a violent headache and nausea overwhelmed him. He groaned and clutched his head, the feeling in his body rushing back all at once, hitting him with a wave of dizziness.

"Don’t push it, Sid. You’re not a kid anymore," Rou peered at him with concern. Through shallow breaths, Sidney responded.

"Shut up… You’re just the same… as always…"
"Heh. Guess being dead keeps me young."

Sidney rasped, "What’s the message…?"

"He said: ‘Don’t destroy Q1. He’s not the enemy.’"
Sidney groaned. Rou was suddenly sitting beside him.

"…What do you mean? Then I’ve failed… I can’t just leave something uncontrollable like that alone."

"I don’t know what it means either. Sid, the bot’s not completely destroyed—just offline. Without your code, it would’ve been catastrophic. But now, he and I are separated. So I don’t know his condition. Fix him. Then ask him."

"…Where am I? I need to get back inside Q1," Sidney tried to stand, but Rou held him down.

"Don’t rush it. Rest. That’ll help you recover faster. Besides… time doesn’t exist here."
The dizziness returned, and Sidney obeyed.

"And Q1's gate is closed right now. We can’t re-enter."

"What does that mean? What happened to Q1? If this isn’t inside him… then where the hell am I?"

He looked around. The mist of glowing particles stretched endlessly in every direction.

"I’m speaking with your consciousness now," Rou said. "This space—it’s not inside Q1."

"Then this is your world?"
"No, not exactly. A middle ground, maybe. I’m not human. But you… you’re not far from here either."

"Sid, if that’s what you think—you're wrong. There’s no heaven or hell here. There’s only memory and emotion. And that… is existence."

"That bot… it felt too real. Was that because you were inside him?"

"Maybe. Maybe not. Even I don’t know. I’m existence made of memory and emotion—but no substance."

"Existence…?"

Sidney looked at Rou, who was sitting next to him with his knees up, calm and still.

"Yeah. I’m memory and data. And your observation—yours and Emi’s—created the interference pattern of my temporary existence."

"…Complex systems, huh. That sounds like you."

"Because it is. Since that day in November 2010, I’ve been in you and Emi. That’s who I am."

Sidney spoke. "The day of your funeral, it rained in San Jose. Hey, Rou… did my wedge help at all?"

"Oh, yeah. The fire alarm didn’t go off thanks to it. And your call to the fire department… without it, my body would’ve been in a much worse state. Gives me chills thinking about it."

"You can still feel that? Even dead?"

"Sure. My memory and emotions are still with me. Joy, sadness, fear. Want me to break it down beyond Ekman’s seven?"

Sidney put a hand on Rou’s shoulder and cut him off.
"Enough. Your label is ‘confused.’"

Rou shrugged. "That’s fair."

They both laughed quietly, and for a while, simply gazed at the space above them.

Sidney’s headache and pain slowly began to fade.

"Sid. You… remembered me all this time."

"I’m not sure why. But yeah. I’ve been watching you ever since that day. It was my assignment… and my job."

"I know. I do now." Rou’s voice softened.

"And after you died, I watched over Emi and Mako. They don’t know anything."

"I know that too."

Sidney turned toward Rou.
"Don’t talk like Mako’s bot. What are you, anyway? Rou’s ghost?"

Rou chuckled. "Hard to believe you’d say that. No—I’m a memory. You and Emi… you’re the ones shaping me."

Sidney looked back up at the sky.
"…I don’t know. It all feels like a dream."

But even as he said that, he was thinking—

Can memory alone form such a coherent personality? And if this is a dream, it’s disturbingly vivid. Is something beyond my memory interfering here?

As if responding to that thought, Rou spoke.

"Maybe. But I’ve always been inside you. And inside Emi, too."

Sidney whispered to no one in particular,
"I never got to repay you."

"What’s that supposed to mean?"

Rou laughed. "There’s no debt. If anything, I owe you… but I can’t repay it. Not now."

"Geez… figures." Sidney grimaced, propped himself up, and rested his arms on his knees.

"I don’t mean money. I lied to you. Used you. Betrayed you. Since that day."

"You didn’t betray me. You just didn’t tell me the whole truth. I never felt betrayed."

"Still the same. Guess being dead didn’t fix your naivety."

"I’ve heard that a hundred times. It’s fine—being naïve."

Sidney started again.
"You already know, don’t you? About my other job. The one I took from the military after retiring."

"Of course. We can talk here, right? I mean, San Jose—that hackathon. That’s where we met."

"Right. NDAs only apply in the real world."

Sidney raised an eyebrow and continued.

"That day… you were sitting alone on a bench, scribbling equations in a notebook."

"I was the math guy. Wanted to double-check a few things during break… wow, that takes me back…"

Rou’s gaze drifted into the past.

"And you came up to me, said, ‘Hey, you look like you're planning to conquer the world…’"

He shrugged.

"‘…but you're not talking to anyone. What's up with that?’ I had no idea what you were saying at first."

"You remember it well. You were drawing equations next to a neural net diagram."

Sidney chuckled, and Rou joined in.

"You said it was a model for emotional recognition and empathy. I got interested."

"Yeah. That was my dream even before college. Then at my booth, he approached me—he asked about emotional recognition neural nets. Said he was a student too."

"A student spy, maybe."

"You answered the call from that spy, left the hotel at night, and wandered out to a park."

Rou sighed. "He told me he’d visited Japan, even knew my hometown. I was happy. Never thought I’d end up in a real-life spy movie."

"Well, it’s America. That’s textbook spy tactics."

"Yeah… and then you beat the guy with the gun, tied him up, and handed him over to the FBI without breaking a sweat. Even back then, I knew you weren’t just a student."

"I was there officially as part of Nexus, but also tailing that agent. You were just the one who took the bait."

"And thanks to you, I didn’t get shot. That moment… that’s how we got connected. I’m glad it happened."


Sidney looked closely at the face of Rō, who sat beside him.

"Are you serious? You got flagged by the military just for having contact with that guy. You really are a fool."

"I told you, Sid—I've heard that so many times it’s practically carved into my ears. But yeah, I’m serious. If I were still alive, maybe we would’ve started a company together by now."

"It was because I warned you. Jessica noticed your change in attitude, panicked, and tried to cover her tracks."

"No, Sid," Rō said, his tone firm.

Sidney frowned, studying him.

"Whether Jessica set me up or not... the reason I died was because of a choice I made."

"……"

"I had a chance to live back then—plenty of them. But I chose to run toward the flames instead of away from them."

"Yes. And that was the one thing you should never have done. It was foolish," Sidney said quietly.

Rō rested his chin in his hand and smiled faintly. "You’ve never been the type to sugarcoat things. That hasn’t changed, huh, Sid?"

"Exactly. And if that’s the only thing you’ve managed to fix since dying... well, at least you’re finally over that part of yourself." Rō let out a bitter laugh.

"……"
Sidney remained silent, absorbing his words.

He thought about Emiko and Makoto, and how they must have felt listening to the message he had left behind—that he would never return. He pictured Makoto's tear-streaked face and closed his eyes.

"Hey. Look, Sid."
Rō tapped Sidney’s shoulder, pointing to the sky above.

"This is fascinating... so quantum. They’re linked—here and there."

Where he pointed, something faint began to shimmer. At first just noise, the image slowly became clearer, projected like a three-dimensional hologram onto a screen of shimmering particles.

Makoto was clinging to Sidney’s unconscious body, crying. A sharp pain stabbed through Sidney’s chest.

"Makoto’s call resonated with your consciousness. Like an entangled state," Rō said, eyes sparkling with curiosity.

"Entangled...? Makoto... with me?" Sidney murmured.

"Yeah. And now you, with her. The moment you both observed one another, the state collapsed into reality. You've found each other."

"Sid... it looks like our daughter just shut down your program."

Makoto had her face buried in Sidney’s chest, still crying. Emiko stood beside them, her left hand resting on Makoto’s shoulder, her right hand pressed gently to her chest in silent prayer.

"Makoto...!" Sidney whispered, trying to rise, but a sharp pain in his head forced him to hold it, groaning. Rō knelt beside him, steadying his body.

Emiko, lips pressed tight, looked down at Sidney and Makoto. Then her gaze caught a flicker of green text on the machine's display.

Just then, Sidney’s pinky finger twitched.

plaintext
コピーする
編集する
System Log: Emotional signal detected.
"Emotion...? Q1... received a human emotional signal?"
Emiko murmured, eyes fixed on the terminal.

plaintext
コピーする
編集する
Neural Interface Reactivated.
> Synchronizing...
...
...
(Q1) Makoto.
If you wish to proceed, define it:

What is "Humanity"? — Answer in one word.
"A quantum gate...? It’s open..."
Emiko whispered, trembling.

"Makoto… look. It’s calling you," she said, pointing to the display.

"Me...?" Makoto looked up, face still wet with tears.

"Yes. It’s like a challenge—from Q1, just for you."

"I can... talk to it?"
Emiko nodded in silence.

Makoto returned to the desk, pulled her chair close, and sat. She glanced at Sidney, then up at her mother, who gently rested a hand on her shoulder.

—"Humanity." In one word…
What do I say? What’s the right answer?

There’s no time to overthink it.

Sidney’s voice echoed in her mind:

“Mako. There’s never just one way. Do it your way. Go for it.”

Makoto stared into the monitor, fingers poised on the keyboard.

"Sid, if you stay here, you’ll never be able to return," Rō said, meeting Sidney’s eyes.

"I was never planning to go back anyway. Tell me—how do I break through Q1’s gate? I have to go—"

Rō put a hand on his shoulder.

"Sid. I told you. You’re alive. You have to go back—not to Q1, but to the real world."

"Go back? To what? If I can’t destroy Q1, I have nowhere left to return to."

"Hold on, Sid. Didn't I say it? Q1 isn't your enemy. And look—he seems to have taken a liking to Makoto."

Rō gestured to the floating vision above. Makoto was shown typing into the terminal.

"Q1’s gate is open. He’s talking to her. Incredible—actual communication."

"Makoto... with Q1?" Sidney’s eyes widened.

"Yeah. She’s grown, hasn’t she? Thanks to you. She looks up to you like a father, even if she’s not fully aware of it."

Sidney gave a dry smile. "Come on. I wasn’t there for her growing up. That can’t be true."

"It’s not about proximity. You two are like a pair of spin-entangled particles. Look—just like this."

Rō traced a formula in the air with his finger:

plaintext
コピーする
編集する
|ψ⟩ = ( |↑⟩A |↓⟩B  −  |↓⟩A |↑⟩B ) / √2
"You won’t know who’s plus or minus until they’re observed... This time, Makoto’s definitely the positive one. I’m kind of jealous."

Sidney sighed. "Math. Even in this place. Save it for your academic talks."

"Heh. But I really believe it. If we consider individual consciousness as qubits, it’s only when they observe each other that a state collapses into being. You need both sides. And that mutual awareness... well, it’s very emotional, isn’t it?"

"Stop it, Rō. That’s not science. You always try to reduce everything to emotion—that’s your bad habit."

Rō laughed. "Imagination begets theory. No one can stop imagination."

"You haven’t changed. But still—Makoto’s father is you."

Rō smirked. "Well then, just look. Even if her bot broke down, she wouldn’t have cried like that."

"……"

Sidney didn’t respond. He simply watched Makoto’s fingers dance across the keyboard.

"Sid. Go back to her. For her sake. Look at what she’s doing—who do you think she’s doing it for?"

Sidney said nothing for a while, eyes fixed on Makoto.

"……If Emiko cried—and wished to speak to you again—would you go back?"

Rō looked down, silent. After a pause, he smiled faintly.

"I’m already dead, Sid... I can’t go back. I shouldn’t. But..."

He hesitated.

"But what?" Sidney prompted.

"...But if Emiko called me... I might not be able to resist."

Sidney nodded.

"Then let’s make a deal. If I manage to return, I’ll fix Makoto’s bot. You, go back into it."

"Sid…"

"I don’t know how this ‘separation’ thing works, but if you do that, I’ll go back."

"...Got it. Then it’s a deal—consensus reached."

They shook hands.

"Think of Makoto. With all your heart. And the one you love."

Arisa’s face flashed in Sidney’s mind. He let out a heavy sigh.

"I sent Arisa a single email before flying to Japan. If I make it back… I dread to think what she’ll do to me."

"You’d better brace yourself. She is Arisa, after all."

They both laughed quietly.

"Sid. Q1 won’t go rogue anymore. Our interference stabilized its field. Even if it looked like coincidence—it was inevitable."

"Your explanations are too lofty. You’re making me sigh again."

Sidney slowly stood.

"And you still talk like a Bronx gangster. I’m glad that hasn’t changed," Rō said, offering his hand.

"Then, until next time," Sidney said, shaking it.

"Yeah… Thank you, Sid."

The golden particles surrounding them began to glow brighter. Rō grinned like a child, whispering softly:

"I believe in you. You can change the world—without destroying it."

The light blazed, dazzling. Sidney reflexively closed his eyes.

"Sid… You can do this. I believe in you."