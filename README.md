# 金研究室ホームページ

このサイトは [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) を使用しています。
コンテンツ管理には [Nuxt Content](https://content.nuxtjs.org/) を使用しています。
スタイルには [Tailwind CSS](https://tailwindcss.com/) を使用しています。

## 必要な開発環境

- Node.js
- VSCode

一応、GitHub上でコードを編集することもできますが、VSCodeを使うことを推奨します。
ただし、Contentの追加・編集のみであればGitHub上で作業しても大丈夫だと思います（ローカルで開発する場合にはプルして差分を更新すること）。

## メンテナンスについて

### Setup

このリポジトリを`git clone`した後、依存関係をインストールしてください。

```bash
# npm
npm install
```

#### Development Server

開発サーバーを起動するには、以下のコマンドを実行してください。

```bash
npm run dev
```

通常であれば、`http://localhost:3000`で開発環境が起動します。

#### 開発中

ローカル環境で開発している場合、`git pull`してリモートリポジトリの変更を取り込んでください。

### サイト運用上の規則

画像とコンテンツ以外の定期的な変更は、基本的に必要ありません。
このサイトを使い続ける場合でページデザインの変更等を行う際には、可能な限りウェブ開発（特に、Vue/Nuxtを触ったことがある人が望ましいがこれに限らない）が得意な人にお願いしてください。

#### 画像について

画像は、`/public/img`ディレクトリ以下に配置してください。

拡張子は`.jpg`に統一してください。別の拡張子を使用すると、場合によってコンポーネントが画像を認識できないことがあります。
修正する場合には、`/components`ディレクトリ以下のコンポーネントを確認してください。
例えば、ページタイトル部分の背景画像は`/components/utilities/PageTitle.vue`内で指定しています。

メンバー画像については、`/public/img/members`ディレクトリ以下に配置してください。

#### コンテンツ

コンテンツは`content`ディレクトリ以下に配置してください。

##### ディレクトリ構成

```bash
content
├── news
│   └── TITLE.md
├── members.json
├── publications.md
├── research.json
└── schedule.json
```

##### newsディレクトリ

`news`ディレクトリには、ニュース記事をMarkdown形式で配置してください。
ファイル名は、記事タイトルを端的に表す英語表現にしてください。

ファイルの先頭には、以下のように記事のメタデータを記述してください。

```markdown
---
title: 記事タイトル
description: 記事の説明
date: YYYY/MM/DD
---
```

`title`がMarkdownファイルのHeading 1を表すことになるため、記事の内容を記述する際には`## 見出し`から始めてください。

詳細は、すでに配置済みの記事を参考にしてください。

##### members.json

`members.json`には、学生メンバーの情報をJSON形式で配置してください。
先生の情報は、直接`/pages/members.vue`に記述しているので、必要に応じてそちらを更新してください。

このファイルの大まかな構造は以下のとおりです。

```json
{
  "graduate": [], // 現在所属している大学院生
  "bachelor": [], // 現在所属している学部生
  "graduated": { // 卒業生
    [
      "year": "卒業年度",
      "member": []
    ]
  }
}
```

現在所属している学生（graduate、bachelor）は、以下のような構造にしてください。

```json
  {
    "name": "学生氏名",
    "img": "画像ファイル名（拡張子は省略）",
    "belonging": "学年",
    "theme": "研究テーマ",
    "message": "趣味等の追加情報を1行で"
  }
```

卒業生の情報は、以下の構造にします。

```json
  {
    "name": "学生氏名",
    "belonging": "学位",
    "theme": "研究テーマ",
  }
```

##### publications.md

`publications.md`には、研究業績をMarkdown形式で配置してください。
すでに配置済みのファイルを確認し、フォーマットに従ってください。

ナンバリングについて、`1.`をつければ自動的にナンバリングされます。
確認していませんが、番号がバラバラでも自動的にナンバリングされると思います。

##### research.json

`research.json`には、研究内容をJSON形式で配置してください。
これは、トップページ（index.vue）にカード形式で表示される内容です。

```json
[
  {
    "title": "研究テーマ",
    "description": "研究内容の説明",
    "img": "画像ファイル名（拡張子は省略）"
  }
]
```

`about.vue`の研究紹介については、直接`/pages/about.vue`に記述しているので、必要に応じてそちらを更新してください。

##### schedule.json

`schedule.json`には、スケジュールをJSON形式で配置してください。

```json
[
  {
    "type": "", // 年間、週間
    "items": [
      {
        "time": "", // 時間
        "content": "" // 内容
      }
    ]
  }
]
```

#### ページ新規作成・編集

新しくページを作成する場合、以下のルールに従ってください。

- Tailwind CSSを使用する。
- 見出しの大きさは、`h1`から`h6`までの6段階で表現し、以下の表のようにClassを付与する。
  - 見出しには `font-bold` を付与して、太字にする。

| Heading | Tailwind Tag         |
| ------- | -------------------- |
| h1      | text-3xl lg:text-5xl |
| h2      | text-2xl lg:text-4xl |
| h3      | text-xl lg:text-3xl  |
| h4      | text-lg lg:text-2xl  |
| h5      | text-base lg:text-xl |
| h6      | texr-base lg:text-lg |

#### 全体のレイアウト構成

ヘッダーやフッターのレイアウトは、`/layouts/default.vue`で定義しています。

ヘッダーのリンクを表示するコンポーネントは、`/components/Header.vue`です。
リンクそのものの定義は、レイアウトファイルの冒頭に以下のように記述しています。

```js
const links = [
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'News',
    link: '/news'
  },
  {
    title: 'Laboratory',
    link: '/laboratory'
  },
  {
    title: 'Publication',
    link: '/publication'
  }
]
```

フッターのコピーライト表記の年数は、自動的に生成されています。

```js
{{ new Date().getFullYear() }}
```
