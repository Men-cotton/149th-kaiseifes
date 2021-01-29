<template>
  <div class="container">
    <Header />
    <Title :is-main="true" :text="'オンライン企画 (1/20 以降追加分)'" />

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
          href="https://forms.gle/FpWK1Uve9wEeAdNJA"
          target="_blank"
          rel="noopener noreferrer"
          >フォーム</a
        >
        にてアンケートをお願いしています。（文化祭期間中に実施されたものとは別です。）<br />
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
          <div
            :class="{ selected: (search_category & (1 << 2)) > 0 }"
            class="search-item"
            @click="changeCategory(2)"
          >
            HP
          </div>
        </div>
        <div class="search-items-2">
          <div
            :class="{ selected: (search_category & (1 << 3)) > 0 }"
            class="search-item"
            @click="changeCategory(3)"
          >
            クラス企画
          </div>
          <div
            :class="{ selected: (search_category & (1 << 4)) > 0 }"
            class="search-item"
            @click="changeCategory(4)"
          >
            部活企画
          </div>
          <div
            :class="{ selected: (search_category & (1 << 5)) > 0 }"
            class="search-item"
            @click="changeCategory(5)"
          >
            文準企画<br />
            有志企画
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
const HP = 1 << 2
const CLASS = 1 << 3
const CLUB = 1 << 4
const VOLUNTEER = 1 << 5

export default {
  name: 'OnlineAdditional',
  components: { Header, Card, Title, Footer },
  data() {
    return {
      search_text: '',
      search_category: YOUTUBE | PDF | HP | CLASS | CLUB | VOLUNTEER,
      width: 1000,
      height: 1000,
      projects: [
        {
          id: 1,
          name: 'Kaisei survival',
          place: 'YouTube',
          type: YOUTUBE | CLASS,
          // description:
          //   '',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvZ-QmejPwNu3IqmF97Ja_B',
          contentUrlText: 'YouTube',
        },
        {
          id: 2,
          name: '新感覚カジノへようこそ',
          place: 'YouTube',
          type: YOUTUBE | CLASS,
          // description:
          //   '',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvZ-QmejPwNu3IqmF97Ja_B',
          contentUrlText: 'YouTube',
        },
        {
          id: 3,
          name: '画竜玉睛～ピタゴランド～',
          place: 'YouTube',
          type: YOUTUBE | CLASS,
          // description:
          //   '',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvZ-QmejPwNu3IqmF97Ja_B',
          contentUrlText: 'YouTube',
        },
        {
          id: 4,
          name: 'Escape from Kaisei castle',
          place: 'YouTube',
          type: YOUTUBE | CLASS,
          // description:
          //   '',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvZ-QmejPwNu3IqmF97Ja_B',
          contentUrlText: 'YouTube',
        },
        {
          id: 5,
          name: '1-5 脱出ゲーム',
          place: 'YouTube',
          type: YOUTUBE | CLASS,
          // description:
          //   '',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvZ-QmejPwNu3IqmF97Ja_B',
          contentUrlText: 'YouTube',
        },
        {
          id: 6,
          name: '浦島impossible',
          place: 'YouTube',
          type: YOUTUBE | CLASS,
          // description:
          //   '',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvZ-QmejPwNu3IqmF97Ja_B',
          contentUrlText: 'YouTube',
        },
        {
          id: 7,
          name: '狙撃迷宮 in 1-7',
          place: 'YouTube',
          type: YOUTUBE | CLASS,
          description:
            '狙撃迷宮in1-7です。この動画では、前日準備の様子を紹介します！',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvZ-QmejPwNu3IqmF97Ja_B',
          contentUrlText: 'YouTube',
        },
        {
          id: 8,
          name: 'オオカミ君には殺されない',
          place: 'YouTube',
          type: YOUTUBE | CLASS,
          description:
            '人狼の世界へと変貌したH1-5...互いに腹の内を探り合うデスゲームが今始まる。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsuO_bTxnDefS_4daw3D-uF7',
          contentUrlText: 'YouTube',
        },
        {
          id: 8.5,
          name: 'UPDATE',
          place: 'YouTube',
          type: YOUTUBE | CLASS,
          description:
            '問題に挑戦するのもストーリーのみを見るのも自由です。皆さんそれぞれの楽しみ方で私たちの参団を満喫してほしいと思います。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsuO_bTxnDefS_4daw3D-uF7',
          contentUrlText: 'YouTube',
        },

        {
          id: 9,
          name: '開成模型製作所',
          place: 'YouTube',
          type: YOUTUBE | CLUB,
          description:
            '本来飾る予定だった模型部の部員が作ったプラモデルを紹介します。ぜひご覧ください！',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WssU8AsAlap1inVNjKa_s2LV',
          contentUrlText: 'YouTube',
        },
        {
          id: 10,
          name: '大道芸、自由自在。',
          place: 'YouTube',
          type: YOUTUBE | CLUB,
          description:
            '毎年、文化祭でジャグリングの公演をしている「大道芸、自由自在。」です。<br />' +
            '今年は新型コロナウイルスの影響でオンラインという形になってしまいましたが、文化祭のために練習をしてきた部員たちの演技を是非ご覧ください！！<br /><br />' +
            '※著作権の都合上、音源が掛かっているところはすべてミュートにしています。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wssjk28py61olLBNgC5bi1MG',
          contentUrlText: 'YouTube',
        },
        {
          id: 11,
          name: '物理部',
          place: 'YouTube',
          type: YOUTUBE | CLUB,
          description:
            '物理部員が電子ゲームや高電圧実験を自作する様子を動画にまとめました。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvduGjxs7g_sSnEDoXE4LqJ',
          contentUrlText: 'YouTube',
        },
        {
          id: 12,
          name: '美術部',
          place: 'YouTube',
          type: YOUTUBE | CLUB,
          description:
            '部誌で公開中の作品『モリエールのデッサン』の完成までを撮ったタイムラプス動画です。石膏デッサンの、とても上手な筆致の作品ですので、どのような順番で作業しているかなどに注目して観てみてください。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WssC3p3Rp2CJ3z0HN1JAj72x',
          contentUrlText: 'YouTube',
        },
        {
          id: 13,
          name: '開成写真館',
          place: 'YouTube',
          type: YOUTUBE | CLUB,
          description: '写真部の一年の活動成果です。是非ご覧ください。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WssLLjth2WVBfuaWrvbNfCla',
          contentUrlText: 'YouTube',
        },
        {
          id: 14,
          name: '彼女は手品好き♡',
          place: 'YouTube',
          type: YOUTUBE | CLUB,
          description:
            '手品部です！ 今年もマジックショーを開催します。不思議、驚き、興奮の数々。目の前でマジシャン達が織り成す奇跡の数々をお楽しみ下さい。誰もが楽しめる内容です。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wssshk2N48Q5kZk2UP5uc1bp',
          contentUrlText: 'YouTube',
        },
        {
          id: 15,
          name: '天文気象部',
          place: 'YouTube, Twitter',
          type: YOUTUBE | CLUB,
          description:
            '【A303 プラネタリウム】<br />' +
            '例年天文気象部では文化祭でプラネタリウムを上映しているのですが、今年は新型コロナウイルス感染拡大の影響でそれができなくなってしまいました。そこで、今回は代わりに星座講座を行うことになりました。<br />' +
            '【A304 展示紹介】<br />' +
            'Twitterでは普段の活動や、合宿で撮った写真などを投稿しています。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wstovpw70rYDiDicOguTSFm8',
          contentUrlText: 'YouTube',
          contentUrl2: 'https://twitter.com/tenmonkisyo',
          contentUrlText2: 'Twitter',
        },
        {
          id: 16,
          name: '開成管弦楽団特別演奏会',
          place: 'YouTube',
          type: YOUTUBE | CLUB,
          description:
            '部員による「花のワルツ」の演奏や、音楽部と合同の「パリのアメリカ人」アンサンブルの動画を公開します！開成管弦楽団によるクラシック音楽をオンラインの世界でも！',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsuhAc7eANr79S6_rCRNZ2Ir',
          contentUrlText: 'YouTube',
        },
        {
          id: 17,
          name: '弱くても勝てます',
          place: 'YouTube',
          type: YOUTUBE | CLUB,
          description: 'クオリティを追求した野球盤です',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wss4r_ZHSsPeeS0ibREyNlSs',
          contentUrlText: 'YouTube',
        },
        {
          id: 18,
          name: '天道流合気道',
          place: 'YouTube',
          type: YOUTUBE | CLUB,
          description:
            '文化祭当日に撮影した演武です。<br />' +
            '<br />' +
            '知られざる合気道の魅力・美しさを。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsuU7PUC0xfo6j_cbJkxCKS-',
          contentUrlText: 'YouTube',
        },
        {
          id: 19,
          name: '飛べない蝉',
          place: 'YouTube, PDF',
          type: YOUTUBE | PDF,
          description: '水泳部の夏合宿の様子です。ぜひご覧ください。',
          contentUrl:
            'https://drive.google.com/drive/folders/1GqSrRSI54MS2pqxPQq0JyVyArB-y2snD',
          contentUrlText: 'Google Drive',
          contentUrl2:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wssd_Zz3yggfbIQGRTKDv1aQ',
          contentUrlText2: 'YouTube',
        },
        {
          id: 20,
          name: '開成鉱石化石館',
          place: 'YouTube, PDF',
          type: PDF,
          description:
            '地質部。今年もやります！開成鉱石化石館！ 今年のテーマは「火山」と「化石」です。是非来てください！',
          contentUrl:
            'https://drive.google.com/drive/folders/1XfDRucJ5nTphnmat4zDFuKJMYuXhLmry',
          contentUrlText: 'Google Drive',
          contentUrl2:
            'https://youtube.com/playlist?list=PLg6BuDxA3WstLWh5oYhFyOgvI2SuMFv0T',
          contentUrlText2: 'YouTube',
        },
        {
          id: 20.5,
          name: '熱闘！俳句甲子園',
          place: 'YouTube',
          type: YOUTUBE,
          description:
            '俳句甲子園の全国大会で叶わなかった、強豪校たちの熱い試合を見ることができます。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wsv5JAJNpQHgDFP1HdhNZzx1',
          contentUrlText: 'YouTube',
        },

        {
          id: 21,
          name: '模擬店係の軌跡の記録',
          place: 'YouTube',
          type: YOUTUBE | VOLUNTEER,
          description:
            '開成学園文化祭準備委員会模擬店係です。<br />' +
            'この動画は、今回本番では活動できなかったため調理実習での動画をまとめたものとなっています。<br />' +
            '（調理実習は、徹底した安全管理、下級生への指導のもと行っています。）',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvgOs9RomuSF1ox787VM4sy',
          contentUrlText: 'YouTube',
        },
        {
          id: 22,
          name: 'The Ninja Mission',
          place: 'YouTube',
          type: YOUTUBE | VOLUNTEER,
          description:
            '主人公の運命は君に託された！<br /><br />' +
            'The Ninja Missionは中2有志で構成された文化祭参加団体です．' +
            '文化祭はオンライン開催となったため，事前収録した動画を編集し公開しています．',
          contentUrl: 'https://youtube.com/channel/UCGt7ld-LpcHyYqYji1-TAlA',
          contentUrlText: 'YouTube',
        },
        {
          id: 23,
          name: '中三有志',
          place: 'YouTube',
          type: YOUTUBE | VOLUNTEER,
          description:
            '中三有志の文化祭参加団体、「暗染地帯」「かいせいゆうえんち」「Codename:ZERO」が共同で製作しました。今年は対面での開催が出来ませんでしたが、いつかまた笑顔で皆様を迎えられる様に願って。そして、また帆を貼る決意を抱いて。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wst_DNNUPtbFCenteFUV8k12',
          contentUrlText: 'YouTube',
        },
        {
          id: 24,
          name: 'かいせいゆうえんち',
          place: 'YouTube',
          type: YOUTUBE | VOLUNTEER,
          description:
            '当団体では、教室内にジェットコースターを建設しました。乗車視点の動画を撮影しましたので、公開します。',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wsu83GiI25fYZZmXUQnYCQ4X',
          contentUrlText: 'YouTube',
        },
        {
          id: 25,
          name: 'CodenameZERO',
          place: 'YouTube【準備中】, HP',
          type: YOUTUBE | HP | VOLUNTEER,
          description:
            '開成生が実際にプレイしてみた！！ <br />' +
            'みんなも一緒に考えてみてください。<br />' +
            '<br />' +
            'ストーリー、謎どれも頑張って作ったので、ぜひ見ていただければ幸いです。',
          // contentUrl:
          //   '',
          contentUrlText: 'YouTube',
          contentUrl2: 'https://anzen-chitai.github.io/C0/',
          contentUrlText2: 'ホームページ',
        },
        {
          id: 26,
          name: '孤独な夜の奇妙なヒゲキ',
          place: 'YouTube',
          type: YOUTUBE | VOLUNTEER,
          description:
            'とある夜、悲劇が起こる。この事件の真相はどこに。それを突き止められるのはあなただ！さぁ謎解き好きの皆よ集まれ！ たくさんの謎、そして恐ろしい真実が君を待っている！',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WssFUo1txn2P60My4kWADtU8',
          contentUrlText: 'YouTube',
        },
        {
          id: 27,
          name: '金の匙 5G',
          place: 'YouTube',
          type: YOUTUBE | VOLUNTEER,
          description:
            '今年で5代目、金の匙の紹介動画です。アトラクションを楽しむところを主に紹介しています。リアル開催は不可能でしたが、記録に残すことができて幸せです。少しでも楽しそうだなと思っていただけたら嬉しいです！！',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3Wstpb_v2-EccVY_Xa6i5g2aD',
          contentUrlText: 'YouTube',
        },
        {
          id: 28,
          name: 'キャップストーリーマニア',
          place: 'YouTube',
          type: YOUTUBE | VOLUNTEER,
          // description:
          //   '',
          contentUrl:
            'https://youtube.com/playlist?list=PLg6BuDxA3WsvTiGD7fVAxgKebZtblqImq',
          contentUrlText: 'YouTube',
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
        width: calc((100vw - 24px - 15px * 2 * 3) / 3);
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
        width: calc((100vw - 60px - 15px * 2 * 6.5) / 6);
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
