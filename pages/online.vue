<template>
  <div class="container">
    <Header />
    <Title :is-main="true" :text="'オンライン企画'" />

    <Title :is-main="false" :text="'コンテンツの複製・転載'" />
    <div class="content">
      <p>
        肖像権・著作権の観点から、いずれのコンテンツにつきましても許可なく複製・転載することを固く禁じます。
      </p>
    </div>

    <Title :is-main="false" :text="'アンケートのお願い'" />
    <div class="content">
      <p>
        <a
          href="https://forms.gle/SmvC1xUAopqS635x5"
          target="_blank"
          rel="noopener noreferrer"
          >フォーム</a
        >
        にてアンケートをお願いしています。<br />
        各企画を運営している生徒の励みとなりますので、ご協力いただければ幸いです。
      </p>
    </div>

    <div class="search">
      <div class="search-items">
        <div class="search-items-1">
          <div
            :class="{ selected: (search_category & (1 << 0)) > 0 }"
            class="search-item"
            @click="changeCategory(0)"
          >
            YouTube
          </div>
          <div
            :class="{ selected: (search_category & (1 << 1)) > 0 }"
            class="search-item"
            @click="changeCategory(1)"
          >
            配布物 (PDF)
          </div>
        </div>
        <div class="search-items-2">
          <div
            :class="{ selected: (search_category & (1 << 2)) > 0 }"
            class="search-item"
            @click="changeCategory(2)"
          >
            音声通話
          </div>
          <div
            :class="{ selected: (search_category & (1 << 3)) > 0 }"
            class="search-item"
            @click="changeCategory(3)"
          >
            cluster
          </div>
          <div
            :class="{ selected: (search_category & (1 << 4)) > 0 }"
            class="search-item"
            @click="changeCategory(4)"
          >
            HP
          </div>
        </div>
      </div>
      <div class="search-text">
        <img src="@/static/icon/search.svg" />
        <div class="search-input">
          <input
            v-model="search_text"
            type="text"
            placeholder="例: ◯◯部, 作品, Live"
          />
        </div>
      </div>
    </div>

    <div v-if="width >= 900" class="card-container">
      <div class="card-list">
        <Card
          v-for="project in show_projects_1"
          :key="project.id"
          :name="project.name"
          :place="project.place"
          :picture-url="project.pictureUrl"
          :content-url="project.contentUrl"
          :content-url-text="project.contentUrlText"
          :content-url2="project.contentUrl2"
          :content-url-text2="project.contentUrlText2"
          :description="project.description"
          :form-url="project.formUrl"
        />
      </div>
      <div class="card-list">
        <Card
          v-for="project in show_projects_2"
          :key="project.id"
          :name="project.name"
          :place="project.place"
          :picture-url="project.pictureUrl"
          :content-url="project.contentUrl"
          :content-url-text="project.contentUrlText"
          :content-url2="project.contentUrl2"
          :content-url-text2="project.contentUrlText2"
          :description="project.description"
          :form-url="project.formUrl"
        />
      </div>
    </div>
    <div v-else class="card-container">
      <div class="card-list">
        <Card
          v-for="project in show_projects"
          :key="project.id"
          :name="project.name"
          :place="project.place"
          :picture-url="project.pictureUrl"
          :content-url="project.contentUrl"
          :content-url-text="project.contentUrlText"
          :content-url2="project.contentUrl2"
          :content-url-text2="project.contentUrlText2"
          :description="project.description"
          :form-url="project.formUrl"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Card from '@/components/SandanCardOnline'
import Title from '@/components/Title'
import Footer from '@/components/Footer'

const YOUTUBE = 1 << 0
const PDF = 1 << 1
const VOICECHAT = 1 << 2
const CLUSTER = 1 << 3
const HP = 1 << 4

export default {
  name: 'Online',
  components: { Header, Card, Title, Footer },
  data() {
    return {
      search_text: '',
      search_category: YOUTUBE | PDF | VOICECHAT | CLUSTER | HP,
      width: 1000,
      height: 1000,
      projects: [
        {
          id: 74,
          name: 'カードゲームの夜',
          // place: 'PDF, HP',
          place: 'PDF',
          // type: PDF | HP,
          type: PDF,
          contentUrl:
            'https://drive.google.com/drive/folders/19SwT_UWXe-RGSBFx0XU0UANpKW_WijQ1',
          contentUrlText: 'Google Drive',
          description:
            '今年もカードゲームの夜が文化祭に参戦。オリジナルカードゲームからマニアックな記事まで作りました。オンラインにてひっそりと営業中。',
        },
        {
          id: 75,
          name: '暗染地帯',
          place: 'HP',
          type: HP,
          description:
            '今も日本に残る奇妙な世界。闇を祀る民達のもとでは希望の光は絶望へと変わる。まるで一冊のホラー小説の世界に入り込むかのように…新たな恐怖体験があなたを待っている。',
          contentUrl: 'https://anzen-chitai.github.io/anchi',
          contentUrlText: 'anzen-chitai.github.io/anchi',
        },
        {
          id: 76,
          name: '縁日係',
          place: 'cluster',
          type: CLUSTER,
          // description:
          //   '今も日本に残る奇妙な世界。闇を祀る民達のもとでは希望の光は絶望へと変わる。まるで一冊のホラー小説の世界に入り込むかのように…新たな恐怖体験があなたを待っている。',
          contentUrl:
            'https://cluster.mu/w/8498a9cb-5ba7-46c1-93d1-2eb3073b26e6',
          contentUrlText: 'cluster',
        },
        {
          id: 77,
          name: '折り紙研究部',
          place: 'cluster, YouTube',
          type: CLUSTER | YOUTUBE,
          description:
            '日本の伝統文化である折り紙は、今もなお変化し、さらに高度な芸術作品へと進化しています。折り研も去年からさらに進化した展示でお客様をお待ちしております。',
          contentUrl:
            'https://cluster.mu/w/c836aafc-1b54-45e9-9c15-2066e5fdc27e/',
          contentUrlText: 'cluster',
          contentUrl2:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wsus1FZg_UM8_LSrw7QOP2Xu',
          contentUrlText2: 'YouTube',
        },
        {
          id: 78,
          name: '飛べない蝉',
          place: 'YouTube, PDF',
          type: YOUTUBE | PDF,
          description:
            '分かりづらい名前ですいません、水泳部です。水泳部には 120 年以上の歴史があります。普段の部活動や合宿の映像紹介をやっていますので、是非いらして下さい！',
          contentUrl:
            'https://drive.google.com/drive/folders/1GqSrRSI54MS2pqxPQq0JyVyArB-y2snD',
          contentUrlText: 'Google Drive',
          contentUrl2:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wssd_Zz3yggfbIQGRTKDv1aQ',
          contentUrlText2: 'YouTube',
        },
        {
          id: 79,
          name: '天道流合気道',
          place: 'YouTube',
          type: YOUTUBE,
          description: '知られざる合気道の魅力・美しさを。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsuU7PUC0xfo6j_cbJkxCKS-',
          contentUrlText: 'YouTube',
        },
        {
          id: 80,
          name: '物理部',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '物理部員が電子ゲームや高電圧実験を自作する様子を動画にまとめました。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvduGjxs7g_sSnEDoXE4LqJ',
          contentUrlText: 'YouTube',
        },
        {
          id: 81,
          name: '彼女は手品好き♡',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '手品部です！ 今年もマジックショーを開催します。不思議、驚き、興奮の数々。目の前でマジシャン達が織り成す奇跡の数々をお楽しみ下さい。誰もが楽しめる内容です。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wssshk2N48Q5kZk2UP5uc1bp',
          contentUrlText: 'YouTube',
        },
        {
          id: 82,
          name: '弁論文春',
          place: 'YouTube, PDF',
          type: YOUTUBE | PDF,
          description:
            '言葉を使い他人を説得する競技、ディベート。オンラインでも熱い試合を実演します。あの超有名校と繰り広げる激論の勝敗を決めるのは貴方だ？！',
          contentUrl:
            'https://drive.google.com/drive/folders/1xOekIVnj4bIuR4npgCT2nkaSMlSa6dKP',
          contentUrlText: 'Google Drive',
          contentUrl2:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvwKkLzRzTeSnISseINjam4',
          contentUrlText2: 'YouTube',
        },
        {
          id: 83,
          name: '大道芸、自由自在。',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '今年のパフォーマンスはとにかく凄い！様々な道具をまさに " 自由自在 " に操る演技で、皆様の心をつかんで見せます！是非ご覧ください！',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wssjk28py61olLBNgC5bi1MG',
          contentUrlText: 'YouTube',
        },
        {
          id: 84,
          name: '動画研究会',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '動画研究会は今年、中一を中心に新規結成された同好会です。休憩がてら、ぜひ一度ご覧ください。<a href="https://m.youtube.com/channel/UCnDbmEaE-7nH71DW-4N-8fw">動画研究会のYouTubeチャンネル</a>',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wst2-qwcXhZzpIBPyVt0dU0J',
          contentUrlText: '動画研究会',
        },
        {
          id: 85,
          name: 'ポケモンリーグ開成',
          place: 'YouTubeLive',
          type: YOUTUBE,
          description: '開成生とのフリー対戦のIP: 20210110',
          contentUrl: 'https://youtu.be/UiSEPXEx76c',
          contentUrlText: 'YouTube',
        },
        {
          id: 86,
          name: '開成管弦楽団特別演奏会',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '部員による「花のワルツ」の演奏や、音楽部と合同の「パリのアメリカ人」アンサンブルの動画を公開します！開成管弦楽団によるクラシック音楽をオンラインの世界でも！',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsuhAc7eANr79S6_rCRNZ2Ir',
          contentUrlText: 'YouTube',
        },
        {
          id: 87,
          name: '開成ピアノの会定期演奏会',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '「開成ピアノの会」のメンバーが、ピアノ曲をオンラインでお届けします！クラシックを中心に披露させていただきます！ぜひお聞きください！',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wst6FoEIO9f_Wff6j1F8t5VF',
          contentUrlText: 'YouTube',
        },
        {
          id: 88,
          name: '不屈の生物部',
          place: 'YouTube, HP',
          type: YOUTUBE | HP,
          description:
            'コロナ渦にも屈しない生物部をご覧あれ。 生き物について様々な展示もしています！',
          contentUrl: 'https://kaiseibiology.wixsite.com/website',
          contentUrlText: 'Webサイト',
          contentUrl2: 'https://youtube.com/channel/UC0TJPe_4H_BnCGFR2f-pmEw',
          contentUrlText2: 'YouTube',
        },
        {
          id: 89,
          name: '最後の切り札',
          place: 'YouTube, PDF',
          type: YOUTUBE | PDF,
          // description:
          //   'コロナ渦にも屈しない生物部をご覧あれ。 生き物について様々な展示もしています！ ぜひ特別棟入ってすぐのC101へ',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wsu6I-MJm8ssXjUbccmblcXh',
          contentUrlText: 'YouTube',
          contentUrl2:
            'https://drive.google.com/drive/folders/1E4XdVyJxib9zVOnAOYSzeoAhgvJ1ALcG',
          contentUrlText2: 'Google Drive',
        },
        {
          id: 90,
          name: 'Letʼs talk Kaisei',
          place: 'Zoom',
          type: VOICECHAT,
          // pictureUrl: 'i.svg',
          contentUrl: 'https://forms.gle/bgY7AgBbrDKoY3Wg6',
          contentUrlText: 'Zoom',
          description:
            '開成生とお話がしたい小中高生の方へ！普段の生活、部活動、入試など、あなたの質問に Zoom で開成生が答えます。さあ、お気軽に開成生と Letʼs talk ！<br />【謎解き】キーワード6: ブラジル',
          formUrl:
            'https://docs.google.com/forms/d/e/1FAIpQLSeDoOyst_7q27ofUAbUX8PtWFYFJfpl0_JdYhIIX5ekEbzp-Q/viewform?embedded=true',
        },
        {
          id: 91,
          name: 'まったり TRPG 広場',
          place: 'PDF',
          type: PDF,
          description:
            'インターネット上の機能を最大限活用し、経験者の方も、初めての方も TRPG を楽しんでいただけるようになっております。是非お越しください！<br />【謎解き】キーワード9: 加',
          contentUrl:
            'https://drive.google.com/drive/folders/1TsPPGzZDF-fq6TnvALl_y2ry4OMkfdy4',
          contentUrlText: 'Google Drive',
        },
        {
          id: 92,
          name: '数学研究部',
          place: 'Zoom, PDF',
          type: VOICECHAT | PDF,
          description:
            '今年はオンラインでの参加となりますが、更にレベルの上がったGPや入試予想問題が君を待っています。部員一同盛り上げてまいりますので、是非一度お越しください！<br />【謎解き】キーワード13: かつお',
          contentUrl:
            'https://drive.google.com/drive/folders/1r9xZDIIS6WrCf41ANAVIuy0vOFwitdwk',
          contentUrlText: 'Google Drive',
          contentUrl2:
            'https://docs.google.com/forms/d/e/1FAIpQLSdr0lulyUwVyI_lFwD0pFPBIomV0fY0Q8oMsfB7hdNZOgNZrg/viewform?usp=sf_link',
          contentUrlText2: 'Zoom',
        },
        {
          id: 93,
          name: '飛車ちゅうの成人式！',
          place: 'Zoom, PDF',
          type: VOICECHAT | PDF,
          description:
            '将棋部ではお客様との対局を行っています。初心者の方も腕利きの方も大歓迎です！また、他校との対抗戦や部誌のオンライン公開もしています。是非お越しください。',
          contentUrl:
            'https://drive.google.com/drive/folders/10WNGhsmugnXC3J_ZVUI-jhQ9lklVc8QE',
          contentUrlText: 'Google Drive',
          contentUrl2:
            'https://docs.google.com/forms/d/e/1FAIpQLSeQNLoyPKF_knk-ACgxbtNwC0EJwq4swRgucl4lto51xQUrvA/viewform?usp=sf_link',
          contentUrlText2: 'Zoom',
        },
        {
          id: 94,
          name: '開成書道展',
          place: 'PDF',
          type: PDF,
          description:
            '書道部員が丹精込めて書いた作品をオンラインでご覧いただけます。文化祭に行かないと見られない作品を是非お気軽にスマホなどで お楽しみください！<br />【謎解き】キーワード12:力',
          contentUrl:
            'https://drive.google.com/drive/folders/1b58Jt-Bg2VwNm6W2Ail1XMjQ4eIenZNB',
          contentUrlText: 'Google Drive',
        },
        {
          id: 95,
          name: '柔道部',
          place: 'YouTube',
          type: YOUTUBE,
          // description:
          //   'コロナ渦にも屈しない生物部をご覧あれ。 生き物について様々な展示もしています！ ぜひ特別棟入ってすぐのC101へ',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsunUHKqA9PbhdrJPDmAaDuE',
          contentUrlText: 'YouTube',
        },
        {
          id: 96,
          name: '社会科研究部',
          place: 'PDF',
          type: PDF,
          description:
            '社会科研究部では、今年も入試予想問題を配布!さらに、近年よく耳にする「天皇制」の展示や、時事問題、クイズなど様々な企画があります。',
          contentUrl:
            'https://drive.google.com/drive/folders/1AHMGYPsnrUlysn-lKf51v5qJYwUl2Xct',
          contentUrlText: 'Google Drive',
        },
        {
          id: 97,
          name: '映画同好会',
          place: 'PDF',
          type: PDF,
          description: "Let's Enjoy! <br />【謎解き】キーワード11 次",
          contentUrl:
            'https://drive.google.com/drive/folders/1owxATAEJyQLT3EQmCLw183p110Jc_cG1',
          contentUrlText: 'Google Drive',
        },
        {
          id: 98,
          name: 'サラブレッド研究同好会',
          place: 'PDF',
          type: PDF,
          description:
            '2020年三冠を達成したコントレイルの矢作芳人調教師などを輩出した当校で、「ディープ」なサラブレッドの世界の展示、VRでのジョッキー体験をお楽しみいただけます。<br />【謎解き】キーワード10 花',
          contentUrl:
            'https://drive.google.com/drive/folders/1616MgcNgmLI1pxV2tD246E5ArOoE1oHS',
          contentUrlText: 'Google Drive',
        },
        {
          id: 99,
          name: '文芸部',
          place: 'PDF',
          type: PDF,
          description: '部誌として部員が執筆した小説を配布しております。',
          contentUrl:
            'https://drive.google.com/drive/folders/1L5cgg-MS9sOpH37hyry1NXPlHoYaH62r',
          contentUrlText: 'Google Drive',
        },
        {
          id: 100,
          name: '紫雁俳句会',
          place: 'YouTube, PDF',
          type: YOUTUBE | PDF,
          description:
            '俳句甲子園の全国大会で叶わなかった、強豪校たちの熱い試合を見ることができます。また、部員たちの作品を見ることができます。',
          contentUrl:
            'https://drive.google.com/drive/folders/1MSjUQUznMlQ-x8DEUad3dPtw8D9jROCq',
          contentUrlText: 'Google Drive',
          contentUrl2:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wsvzbu8ZD1DsZgFvrBFmyLjx',
          contentUrlText2: 'YouTube',
        },
        {
          id: 101,
          name: '大化学実験',
          place: 'YouTube, PDF',
          type: YOUTUBE | PDF,
          description:
            '大化学実験では、普段見られないような様々な化学実験を行っています。多くの実験を分かりやすく解説していますので、ぜひ見に来てください！',
          contentUrl:
            'https://drive.google.com/drive/folders/1gkmda8wso7kjt5J9gShP8TuEMGWa5pJH',
          contentUrlText: 'Google Drive',
          contentUrl2:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wss8dPjXlgC_xPoo33wXsfMJ',
          contentUrlText2: 'YouTube',
        },
        {
          id: 102,
          name: '新入生 (中1・高1編入) 参加団体',
          place: 'YouTube',
          type: YOUTUBE,
          // description:
          //   '大化学実験では、普段見られないような様々な化学実験を行っています。多くの実験を分かりやすく解説していますので、ぜひ見に来てください！',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvZ-QmejPwNu3IqmF97Ja_B',
          contentUrlText: 'YouTube',
        },
        {
          id: 103,
          name: 'バンド',
          place: 'YouTube Live',
          type: YOUTUBE,
          // description:
          //   '大化学実験では、普段見られないような様々な化学実験を行っています。多くの実験を分かりやすく解説していますので、ぜひ見に来てください！',
          contentUrl:
            'https://youtube.com/channel/UCAbcWw-w8k-KmjtG-cYsqyA/featured',
          contentUrlText: 'YouTube',
        },
        {
          id: 104,
          name: 'バンドコンテスト',
          place: 'YouTube Live【終了】',
          type: YOUTUBE,
          description: '1/10 (日) 9:50 ~ 開催予定',
          // description:
          //   '事前に行われたオーディションで見事上位を獲得した5バンドによる演奏勝負バンドコンテストの頂点を決める審査員はあなた！！90分で5バンドが楽しめるお得なステージにみんな集まれ～ <br /> 1/10 (日) 9:00 ~ 10:40 開催予定',
          contentUrl: 'https://youtu.be/aMi_k4j3tSI',
          contentUrlText: 'YouTube',
        },
        {
          id: 105,
          name: '中夜祭',
          place: 'YouTube Live【終了】',
          type: YOUTUBE,
          description: '1/9 (土) 14:55 ~ 16:25 開催予定',
          contentUrl: 'https://youtu.be/EhUbtmi0Bcs',
          contentUrlText: 'YouTube',
        },
        {
          id: 106,
          name: '後夜祭',
          place: 'YouTube Live【終了】',
          type: YOUTUBE,
          description: '1/10 (日) 11:15 ~ 開催予定',
          contentUrl: 'https://youtu.be/aMi_k4j3tSI',
          contentUrlText: 'YouTube',
        },
        {
          id: 107,
          name: '開成校舎 再現ワールド',
          place: 'cluster',
          type: CLUSTER,
          description:
            '本来別の企画で使うはずだった校舎マップを、その企画がなくなったため活用したものです。是非ご覧ください。',
          contentUrl:
            'https://cluster.mu/w/83937616-d2f0-4bec-a026-126b0e624b1f',
          contentUrlText: 'cluster',
        },
        {
          id: 108,
          name: '開成ツアー',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '校内紹介の動画です。Mr. 開成候補の6人がナレーションを担当しております。ぜひご高覧ください。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvgOs9RomuSF1ox787VM4sy',
          contentUrlText: 'YouTube',
        },
        {
          id: 109,
          name: '天文気象部',
          place: 'PDF',
          type: PDF,
          description:
            '天文気象部では宇宙や大気のことについて紹介しています。ぜひお越しください。',
          contentUrl:
            'https://drive.google.com/drive/folders/172ORRQ5ppwx_ilt_DjBImxpjazgMVNOf',
          contentUrlText: 'Google Drive',
        },
        {
          id: 110,
          name: 'コンピューター部大波乱',
          place: 'HP',
          type: HP,
          description:
            '大波乱だった今年度も、コンピューター部では部員手作りのゲームや作品の展示、部誌の配布を行っています！さらに今回は、オンラインでもいろいろ企画しています！',
          contentUrl: 'https://kclc.net/dl/',
          contentUrlText: 'Webサイト',
        },
        {
          id: 111,
          name: '開成鉱石化石館',
          place: 'PDF',
          type: PDF,
          description:
            '地質部。今年もやります！開成鉱石化石館！ 今年のテーマは「火山」と「化石」です。是非来てください！',
          contentUrl:
            'https://drive.google.com/drive/folders/1XfDRucJ5nTphnmat4zDFuKJMYuXhLmry',
          contentUrlText: 'Google Drive',
        },
        {
          id: 112,
          name: '鉄研の車窓から 2020',
          place: 'YouTube, HP',
          type: YOUTUBE | HP,
          description:
            '今年度の文化祭はオンライン上のみの開催となってしまいましたが、部誌「乗降場」の公開・鉄研クイズ・毎年恒例の大ジオラマの様子・合宿＆旅行会紹介・フォトコンテストなど、様々なコンテンツが楽しめます。是非ご参加ください！',
          contentUrl: 'https://kstekken2020.localinfo.jp/',
          contentUrlText: 'Webサイト',
          contentUrl2:
            'https://youtube.com/channel/UC43iU_l6cYFFB6J9331cwwA/featured',
          contentUrlText2: 'YouTube',
        },
        {
          id: 113,
          name: '講演会',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '<a href="../kaiseifes-lecture.pdf" target="_blank" rel="noopener noreferrer">概要</a>' +
            ' はこちらからご覧ください。 <br />' +
            '今回の海野裕也さんの講演に関する質問がありましたら、上記Googleフォームよりご回答ください。<br />' +
            '※ 質問は、1月10日14時30分より、17日23時までに回答されたものを受け付けます。<br />' +
            '※ 不適切な質問は控えるようお願いします。<br />' +
            '※ 全ての質問に回答していただけるとは限りません。ご了承ください。<br />' +
            '回答は <a href="/timetable/" target="_blank" rel="noopener noreferrer">タイムテーブルのページ</a> に追記される予定です。',
          contentUrl: 'https://youtu.be/dgcUrqiz-Gk',
          contentUrlText: 'YouTube',
          contentUrl2: 'https://forms.gle/wbsC6g9WH7krxEZn6',
          contentUrlText2: '質問フォーム',
        },
        {
          id: 114,
          name: 'note 古本係企画',
          place: 'HP',
          type: HP,
          description:
            '文化祭準備委員会古本係の生徒が、お勧めの本について紹介文を書きました。新型コロナウイルス感染症拡大による対面での文化祭の中止に伴い、例年通り古本を皆様にお届けすることは叶いませんが、オンライン開成祭にご来場いただいた皆様に、この記事を通して、少しでも本への親しみを抱いていただければ幸甚です。',
          contentUrl: 'https://note.com/kaisei_festival/n/na8f0869a6e5a',
          contentUrlText: 'note',
        },
        {
          id: 115,
          name: '美術部',
          place: 'YouTube, PDF',
          type: YOUTUBE | PDF,
          description:
            '鉛筆、油絵、水彩などなど、部員たちが描いてきた作品たちを展示中。技巧を凝らした、大胆かつ精緻な筆づかいをぜひ感じてください。',
          contentUrl:
            'https://drive.google.com/drive/folders/1bZnMTypg4jtpymqeRL13k4sN4NcLNnxk',
          contentUrlText: 'Google Drive',
          contentUrl2:
            'https://youtube.com/playlist?list=PLg6BuDxA3WssC3p3Rp2CJ3z0HN1JAj72x',
          contentUrlText2: 'YouTube',
        },
        {
          id: 116,
          name: '推しを語りたい',
          place: 'PDF',
          type: PDF,
          // description:
          //   '地質部。今年もやります！開成鉱石化石館！ 今年のテーマは「火山」と「化石」です。是非来てください！',
          contentUrl:
            'https://drive.google.com/drive/folders/1b9u_81W-lAITMI0mqwBQsLWmBC2dGlqr',
          contentUrlText: 'Google Drive',
        },
      ],
      show_projects: [],
      show_projects_1: [],
      show_projects_2: [],
    }
  },
  watch: {
    search_text(_, __) {
      this.searchProject()
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.searchProject()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (process.browser) {
        this.width = window.innerWidth
        this.height = window.innerHeight
      }
    },
    changeCategory(x) {
      this.search_category ^= 1 << x
      this.searchProject()
    },
    searchProject() {
      const newText = this.search_text
      const ret = []

      for (let i = 0; i < this.projects.length; i++) {
        if ((this.search_category & this.projects[i].type) === 0) continue

        if (newText && newText !== '') {
          if (
            ('name' in this.projects[i] &&
              this.projects[i].name.includes(newText)) ||
            ('place' in this.projects[i] &&
              this.projects[i].place.includes(newText)) ||
            ('description' in this.projects[i] &&
              this.projects[i].description.includes(newText))
          ) {
            ret.push(this.projects[i])
          }
        } else {
          ret.push(this.projects[i])
        }
      }
      this.show_projects = ret

      const ret1 = []
      const ret2 = []
      for (let i = 0; i < ret.length; i++) {
        if (i % 2 === 0) ret1.push(ret[i])
        if (i % 2 === 1) ret2.push(ret[i])
      }
      this.show_projects_1 = ret1
      this.show_projects_2 = ret2
    },
  },
}
</script>

<style scoped lang="scss">
$black: #082449;
$white: #ffffff;
$orange: #ff9a70;
$yellow: #fccf5a;

@mixin Didot-font {
  font-family: linotype-didot, serif;
}
@mixin UD-sin-go-font {
  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
}

.content {
  @include Didot-font();
  margin-bottom: 20px;
  p {
    color: $black;
    font-size: 20px;
    margin-left: 45px;
    margin-right: 20px;
  }
  a {
    color: $black;
  }
  a:hover {
    color: $yellow;
  }
}

.search {
  border: 1px solid $black;
  border-radius: 5px;

  .search-items-1,
  .search-items-2 {
    display: flex;
    .search-item {
      display: flex;
      height: 50px;
      @include UD-sin-go-font();
      color: $black;
      font-size: 18px;
      text-align: center;
      align-items: center;
      justify-content: center;
      border: 2px solid $orange;
      border-radius: 5px;
    }
    .selected {
      background-color: $orange;
      color: $white;
    }
  }

  .search-text {
    height: 40px;
    border-top: 1px solid $black;
    border-radius: 0 0 5px 5px;
    display: flex;
    img {
      margin: 7px;
    }
    .search-input {
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        @include UD-sin-go-font;
        width: calc(100vw - 60px - 14px - 25px - 30px);
        border: none;
      }
    }
  }
}

.card-container {
  margin-top: 40px;
  .card-list {
    display: inline-grid;
  }
}

@media screen and (max-width: 900px) {
  .content {
    margin-left: 25px;
  }

  .search {
    height: 160px;
    margin: 22px 12px auto 12px;
    .search-items-1 {
      .search-item {
        width: calc((100vw - 24px - 15px * 2 * 2) / 2);
        margin: 7px 15px;
      }
    }
    .search-items-2 {
      .search-item {
        width: calc((100vw - 24px - 15px * 2 * 3) / 3);
        margin: 0 15px 7px 15px;
      }
    }
  }

  .card-list {
    margin-left: calc((100vw - 340px) / 2 - 10px);
    margin-right: calc((100vw - 340px) / 2 - 10px);
  }
}

@media screen and (min-width: 900px) {
  .content {
    margin-left: 60px;
  }

  .search {
    height: 110px;
    margin: 47px 30px auto 30px;
    .search-items {
      display: flex;
      .search-item {
        width: calc((100vw - 60px - 15px * 2 * 5.5) / 5);
        margin: 10px 15px;
      }
    }
  }

  .card-list {
    margin-left: calc((100vw - 340px * 2) / (2 * 2) - 10px);
    margin-right: calc((100vw - 340px * 2) / (2 * 2) - 10px);
  }
}
</style>
