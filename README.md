# 金研究室ホームページ

- [運用規則](#運用規則)
- [内容追加・修正](#内容追加修正)
- [開発](#開発)

## 運用規則

画像とコンテンツ以外の定期的な変更は、基本的に必要ありません。

## 内容追加・修正

### ディレクトリ構成

```bash
img
└── member
news
└── TITLE.md
members.json
pages.json
```

### 画像の追加・変更・削除

画像を配置してください。拡張子は`.jpg`に統一してください。

メンバー画像については、`img/member`ディレクトリ以下に配置してください。

### ニュース記事の追加・修正

`news`ディレクトリに、Markdown形式で配置してください。
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

次に、`pages.json`にニュース記事の名前を追加してください。

詳細は、すでに配置済みのものを参考にしてください。

### 学生情報の追加・修正

`members.json`にJSON形式で配置してください。
先生の情報は、直接`laboratory.html`に記述しています。

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

<details>
<summary>
雑記（後で修正。ここから下は、今は気にしなくて大丈夫です。）
</summary>

https://github.com/kimjlab/kimjlab.github.io/settings/pages 
で Deploy static content to Pagesする
Static HTMLを選択(.github/workflows/static.ymlが生成される)


```sh
sudo apt install -y nginx
nginx
#open localhost:8080

#if not working
sudo vim /etc/nginx/sites-available/default

#server {
#    listen 8080;
#}

nginx -s reload
```

## 必要な開発環境

- nginx
  - サーバー構築なしでも起動しますが、jsonがfetchされないため一部コンテンツが非表示になります。
- VSCode

一応、GitHub上でコードを編集することもできますが、VSCode等を使うことを推奨します。
ただし、Contentの追加・編集のみであればGitHub上で作業しても大丈夫だと思います（ローカルで開発する場合にはプルして差分を更新すること）。

## 開発方法

- nginxサーバーの起動
```sh
nginx
```

- rootディレクトリに移動(デフォルトはmacでは`/usr/local/var/www/`、ubuntuでは`/var/www/html`)

### Setup
(未着手)

このリポジトリを`git clone`した後、依存関係をインストールしてください。

```bash
# npm
npm install
```

### Development Server
(未着手)

開発サーバーを起動するには、以下のコマンドを実行してください。

```bash
npm run dev
```

通常であれば、`http://localhost:3000`で開発環境が起動します。

### 開発中

ローカル環境で開発している場合、`git pull`してリモートリポジトリの変更を取り込んでください。

画像を修正する場合には、`/components`ディレクトリ以下のコンポーネントを確認してください。
例えば、ページタイトル部分の背景画像は`/components/utilities/PageTitle.vue`内で指定しています。

このサイトは [Tailwind CSS](https://tailwindcss.com/) を使用しています。

#### publications.md
(未着手、教員データベースのwebスクレイピング？)

`publications.md`には、研究業績をMarkdown形式で配置してください。
すでに配置済みのファイルを確認し、フォーマットに従ってください。

ナンバリングについて、`1.`をつければ自動的にナンバリングされます。
確認していませんが、番号がバラバラでも自動的にナンバリングされると思います。

#### research.json
(未着手)


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

`about.html`の研究紹介については、直接`about.html`に記述しているので、必要に応じてそちらを更新してください。

#### schedule.json
(未着手)

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

### コンテンツ
(未着手)

コンテンツは`content`ディレクトリ以下に配置してください。


</details>
