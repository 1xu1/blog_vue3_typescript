# blog_vue3_typescript

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
blog_vue3_typescript
├─ .browserslistrc
├─ .env.development
├─ .env.production
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-receive
│  │  ├─ post-rewrite
│  │  ├─ post-update
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate
│  │  ├─ update
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 03
│  │  │  ├─ b71344e6229e7753d5217b20c6690ed41da176
│  │  │  └─ d0beac3a4f86199c4a9366c26d6780ae82e1b9
│  │  ├─ 04
│  │  │  └─ cc84bd54371d519a95a5b9601a913a54a81f66
│  │  ├─ 09
│  │  │  └─ 91a11760ec9136f14f88f93fb32caff7a89817
│  │  ├─ 0e
│  │  │  └─ 89174b410ba66aee5c074640aabc2978921db9
│  │  ├─ 10
│  │  │  └─ 12b60b6be58aafe10ab1df8d59d1b0e806c313
│  │  ├─ 12
│  │  │  └─ dfe38437d488bdd212e30c2ddd19ce0e09bd40
│  │  ├─ 13
│  │  │  └─ df8f15264a9469bd7bc21fcfee0c92935e90c9
│  │  ├─ 14
│  │  │  └─ 73320b024fe39d6372600563e354b82d073645
│  │  ├─ 16
│  │  │  └─ 377e10adee8b2741c62b0531e0539f241a6408
│  │  ├─ 19
│  │  │  ├─ 712549382acce330c9eb80279ccf2e59b67af5
│  │  │  ├─ a2c227d97becde47de3c785f59c7be94ea1b4c
│  │  │  └─ f1d3cc691f2c86abec476f512566214142dcb4
│  │  ├─ 1a
│  │  │  └─ 565c1dbf68fa1477d1d9bbb64d13ae9bf57aca
│  │  ├─ 1e
│  │  │  └─ 984a0cfe2d3bef5b4275bd359b80f65395de40
│  │  ├─ 21
│  │  │  ├─ 1edb67ca2e17446940c1691a7685ccd13b49a3
│  │  │  └─ f873eac7ad230f6388ba05d93df9c28a16ba21
│  │  ├─ 24
│  │  │  └─ a8a846e5bdb815c58b6d4a2a47023190cdb575
│  │  ├─ 26
│  │  │  └─ ea6109f613c4e94239ffd1592d258d2da5764b
│  │  ├─ 28
│  │  │  └─ 8e90d38090fbd301d53110884145b124213d16
│  │  ├─ 29
│  │  │  └─ 36bb40982ead9229f20f35f42cc790c8973c37
│  │  ├─ 2c
│  │  │  └─ 466e5b7c51e92bd0cd2098cd64c61f8a8900ec
│  │  ├─ 2e
│  │  │  ├─ 2ef3cbc78ee21774ac302173f53a318897e17e
│  │  │  └─ 3e7c71da4b8f9115b76b6c0532dbdd484d9ab4
│  │  ├─ 33
│  │  │  └─ eb1fdded6502250c15c07061d94b4f82074b71
│  │  ├─ 38
│  │  │  ├─ 7c0faae7d0ba4a5bfb445c84789075acc9567d
│  │  │  └─ 8c020bbf336082457552bc082fce867586c6b5
│  │  ├─ 39
│  │  │  └─ 95f7874f2ce0ec171f676b20e74bd5512c6547
│  │  ├─ 3f
│  │  │  ├─ 2c97417ef8a050ef5758b42b7846497243b612
│  │  │  └─ fb657265f742e2e3947b0473489d7c837d922a
│  │  ├─ 40
│  │  │  └─ 6eab517f6e915a6bd89317850f8f6db8544d01
│  │  ├─ 42
│  │  │  └─ 8418ee1b48544c49a2f476cf517ec4249e867c
│  │  ├─ 47
│  │  │  └─ 76a0ff19555817e2cc7feca9f66e2acf9df26e
│  │  ├─ 4b
│  │  │  └─ 57745d9a523dc679f14e16057f54b95d5fec9c
│  │  ├─ 50
│  │  │  └─ b66af8b09c95823aa1d662522851d7d71943d5
│  │  ├─ 51
│  │  │  └─ e68418b5062acb21904a1cd312adeabaec9242
│  │  ├─ 53
│  │  │  └─ 6bd3b35c1d190d95da49aeb13b49c030ce5539
│  │  ├─ 56
│  │  │  └─ 62d3025425599ec050ca74ec64d23a9706da24
│  │  ├─ 57
│  │  │  ├─ dc02d6fba595a3f4b87321885ae4618094a303
│  │  │  └─ f88af3fa74c7f7c3808cad1e6b2ed4c65aae58
│  │  ├─ 58
│  │  │  └─ 9d602ea3a8e68dacfd736931d796e54dc4b789
│  │  ├─ 5b
│  │  │  ├─ 35f20715eefa579fc2602f581a5f83e41bdd64
│  │  │  └─ 551a0728d09d71a3f1af72bd9ec33494fb7495
│  │  ├─ 5f
│  │  │  └─ 7efd95dd4b1b4b12aa8506af2414d7050af591
│  │  ├─ 61
│  │  │  ├─ 73548bc00e750ba0f052f5b5436cdb5fc4a2d2
│  │  │  └─ a328109940b4f6a2f587abfcbd2a55a1569308
│  │  ├─ 63
│  │  │  ├─ b5eab1bd8a92456fb4a6d2d149ae9905b93219
│  │  │  └─ b6912ce029c79e37e71e63d81503451b59484d
│  │  ├─ 66
│  │  │  └─ c8ef31b901d989bf47cf4266eb05e0c539ebe3
│  │  ├─ 67
│  │  │  └─ ecf2313042f4ad707d7ea9118e83c350351725
│  │  ├─ 6b
│  │  │  └─ b74b8ab864581b524a9da8e9bf7171c4eac8d3
│  │  ├─ 6c
│  │  │  ├─ 931ed262afad72a123c95fcd53b5141d7f692e
│  │  │  └─ 946737c8e5d075003832b4543d477d01279944
│  │  ├─ 73
│  │  │  └─ 6dc77708fe88b91ff494d42295382fe395cbf7
│  │  ├─ 74
│  │  │  ├─ 6d7d7019452e9c97b8615cc18f14842f3b3910
│  │  │  └─ 6e6ddc69b83d93401442871aaf76dbf76880fa
│  │  ├─ 75
│  │  │  └─ 055a81c7f9641f01acc6d33763dea2c12ec550
│  │  ├─ 77
│  │  │  └─ 4ef4ef740a1d0305b8538b4a8635f385473379
│  │  ├─ 7b
│  │  │  ├─ 162a71baecdc095ceb659cc759e54512044ac8
│  │  │  └─ 40cf5a6bcdb060d5e7b9c0157f5b5e55f59cd0
│  │  ├─ 7e
│  │  │  └─ 7901a44daffe478998012fb328b7a138aab8bc
│  │  ├─ 7f
│  │  │  └─ 288642ffd6c215dc9f6b95dbb4db15f647c1c8
│  │  ├─ 80
│  │  │  └─ ecb3a8443730b02cc5e917055abd795c3ebff0
│  │  ├─ 83
│  │  │  └─ f1f0f5302d16d9308863eb07162206934d9514
│  │  ├─ 87
│  │  │  └─ d2b8a354dddd616125dd8b96b0fac8df67f7f1
│  │  ├─ 8a
│  │  │  └─ a216766e6aa6587e40c5d0afb846168b29973c
│  │  ├─ 8b
│  │  │  └─ 2e0f3dc44c4e89f6be8afd708aee61113d667d
│  │  ├─ 8f
│  │  │  └─ a35aa52ba64bf2c22a0a64353842606c3147c7
│  │  ├─ 92
│  │  │  └─ 972c511f272432c766d4e2c76a8f384da19309
│  │  ├─ 98
│  │  │  └─ b0c9304c2765291ad9914d20f2192a06c06511
│  │  ├─ 9c
│  │  │  └─ 56f879f27f97d70039f47387c65ac79d3b98c0
│  │  ├─ 9f
│  │  │  └─ 529fe33986905cee8c1cf59879c26ac24963a3
│  │  ├─ a5
│  │  │  ├─ 29dfd24a0c404576138ee5b5baba9ddcb03904
│  │  │  └─ cdb48c2ba35d036dce28a0bacf4366c112f7c9
│  │  ├─ aa
│  │  │  └─ f007ed50ccdfc88d922f357b3a7178768d24b8
│  │  ├─ ab
│  │  │  └─ 43d41330725f348e51d3f16b88b45a44d2be5b
│  │  ├─ ad
│  │  │  └─ 5c0a5fb2e046869aeba517d81a7f26b0b025cf
│  │  ├─ b1
│  │  │  └─ 209e93d9891576f0fc176a948a8a0f08c8d35f
│  │  ├─ b3
│  │  │  └─ a61fc5e3319b680a17adb101686d235727f1b4
│  │  ├─ b8
│  │  │  ├─ 6ad5821c5c1bc956adc0959d9b0c2f598556e9
│  │  │  └─ b34035ba80d85df875479ebcd62ea07dfb7caa
│  │  ├─ bd
│  │  │  └─ 61ba310dcfa1b349704b46aa34d2acd04055ec
│  │  ├─ be
│  │  │  └─ 94ddc01ee38fab3f2353dfcdb19963d4c49a16
│  │  ├─ c0
│  │  │  └─ e3460371471881a85520ca09f204c248490242
│  │  ├─ c3
│  │  │  └─ b4b97a33747b0e21769edb1baec3ab0d0c5bc4
│  │  ├─ c4
│  │  │  └─ 5544f6faefbfebac9f82520084e0dc9a8871e9
│  │  ├─ c8
│  │  │  └─ 43b8e7dac4e70d99954c04e412bb058431cd50
│  │  ├─ cc
│  │  │  └─ a7a09dd4a88f8799b0d4b49e9ba3886340c966
│  │  ├─ ce
│  │  │  └─ c227e7f06090d90b72a4ea41d4734709ac79cb
│  │  ├─ cf
│  │  │  └─ 1d57579ce95257b91d24d1edaf0f88a5333785
│  │  ├─ d1
│  │  │  └─ 26628c8e269d5dce74be73ecc654bf7d99acdd
│  │  ├─ d3
│  │  │  └─ 808b518652e5eacc07d3ef7431cc18c086236d
│  │  ├─ d4
│  │  │  └─ 533833d47b6c99c08ceb06dd49f006d2d28843
│  │  ├─ d5
│  │  │  └─ 5a859a6f8644eb19f0fd78601074335ee18f5d
│  │  ├─ d6
│  │  │  └─ f95e228053376559a2ab498f003c396645de5d
│  │  ├─ d8
│  │  │  └─ 9fa9275953307195fdec441fa4345e89c2200f
│  │  ├─ d9
│  │  │  └─ 7db104b7dd6fc2d3982be42f877a52dfd8a6e7
│  │  ├─ da
│  │  │  └─ 8393bf29d87003db83af4c1574246037cf6805
│  │  ├─ db
│  │  │  └─ 4f37d94bbdaf97e77ccbc0846d93d3704523b5
│  │  ├─ dc
│  │  │  └─ 882d6f0c1c4bd3689b8037c15098d1e3e4d5cb
│  │  ├─ e0
│  │  │  └─ 3dc5aab85103b398162d535721c9553a7b5bea
│  │  ├─ e1
│  │  │  └─ 90957f2b843bd82944cecee74be60c1cf96b34
│  │  ├─ e7
│  │  │  └─ fa38131a6e6e3cb5fe69925a9e1e724afb631a
│  │  ├─ e9
│  │  │  └─ a8f7e96b49a3fa23107838bc20fbeefaa786d1
│  │  ├─ eb
│  │  │  └─ cb78525c1dbc93d8127b2ad72677afe92b7cb5
│  │  ├─ f1
│  │  │  ├─ 16cb0f41e0483ab549591d86f015a5038e6c93
│  │  │  └─ 436c6da51ad69ec6e1be85fb96bbf1ca39479b
│  │  ├─ f2
│  │  │  └─ 32be6f160936e7112f78fe74d6c69375c53530
│  │  ├─ f8
│  │  │  └─ 715c88bc61542e58ea03eb1f721f09fc8bf44a
│  │  ├─ fb
│  │  │  └─ 39bd71f3f3955923af177ea432338c779a63dc
│  │  ├─ fe
│  │  │  └─ 19a8a1ef730696013818f3b498cf6fb9a079ef
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-6b638e3f019b38953acdb99014bba21067eedb26.idx
│  │     └─ pack-6b638e3f019b38953acdb99014bba21067eedb26.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ img
│  │  ├─ background
│  │  │  └─ city.jpg
│  │  └─ icons
│  │     └─ android-chrome-192x192.png
│  ├─ index.html
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ api
│  │  ├─ comment.js
│  │  ├─ request.js
│  │  ├─ share.js
│  │  └─ user.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  └─ utils.css
│  │  ├─ icons
│  │  │  ├─ bilibili.svg
│  │  │  ├─ GitHub.svg
│  │  │  ├─ QQ.svg
│  │  │  └─ WeChat.svg
│  │  ├─ img
│  │  │  ├─ AliPay.jpg
│  │  │  ├─ default_head.png
│  │  │  ├─ head.jpg
│  │  │  ├─ head.png
│  │  │  ├─ head_3.jpg
│  │  │  ├─ WeChat.jpg
│  │  │  └─ what.png
│  │  └─ js
│  │     └─ utils.js
│  ├─ components
│  │  ├─ background
│  │  │  └─ Background.vue
│  │  ├─ BuyMeCofee.vue
│  │  ├─ Footer.vue
│  │  ├─ index.js
│  │  ├─ LikeButton.vue
│  │  ├─ MusicPlayer.vue
│  │  ├─ Pagination.vue
│  │  ├─ ScrollToTop.vue
│  │  ├─ SolarSystem.vue
│  │  └─ things
│  │     ├─ CrossLine.vue
│  │     ├─ index.js
│  │     ├─ LoadingIcon.vue
│  │     └─ XuButton.vue
│  ├─ directives
│  │  ├─ index.ts
│  │  └─ modules
│  │     └─ time.ts
│  ├─ layout
│  │  └─ Header.vue
│  ├─ main.ts
│  ├─ mock
│  │  ├─ index.js
│  │  └─ share.js
│  ├─ registerServiceWorker.ts
│  ├─ router
│  │  └─ index.ts
│  ├─ shims-vue.d.ts
│  ├─ store
│  │  └─ index.ts
│  ├─ style
│  │  └─ color.scss
│  ├─ template
│  │  └─ template.vue
│  ├─ utils
│  │  └─ utils.js
│  └─ views
│     ├─ BackStage
│     │  ├─ BlogManager
│     │  │  ├─ index.vue
│     │  │  └─ list.vue
│     │  ├─ CommentManager
│     │  │  ├─ index.vue
│     │  │  └─ list.vue
│     │  ├─ index.vue
│     │  ├─ ShareManager
│     │  │  ├─ index.vue
│     │  │  └─ list.vue
│     │  ├─ SideBar.vue
│     │  ├─ SiteConfiguration
│     │  │  └─ index.vue
│     │  └─ UserInfo
│     │     └─ index.vue
│     ├─ Blog
│     │  ├─ BlogContent.vue
│     │  ├─ BlogHead.vue
│     │  ├─ BlogMenu.vue
│     │  ├─ Comment.vue
│     │  └─ index.vue
│     ├─ BlogEditor
│     │  └─ index.vue
│     ├─ Home
│     │  ├─ BlogList.vue
│     │  ├─ ConfigCard.vue
│     │  ├─ index.vue
│     │  ├─ LabelCloudCard.vue
│     │  ├─ LatestCommentCard.vue
│     │  └─ PersonalCard.vue
│     ├─ Register
│     ├─ Sharing
│     │  ├─ EditShareDialog.vue
│     │  ├─ index.vue
│     │  └─ ShareCard.vue
│     └─ ToDoList
│        ├─ index.vue
│        └─ ToDoList.vue
├─ tests
│  └─ unit
│     └─ example.spec.ts
├─ tsconfig.json
└─ vue.config.js

```