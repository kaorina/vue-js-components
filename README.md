## このリポジトリについて
### Vue.jsで構築したコンポーネント説明用のサンプルアプリです。
Vue.jsのコンポーネント説明用に登録フォームアプリを、コンポーネントを使用しないver.とコンポーネントを使用したver.で実装したサンプルアプリです。<br>
ベースの実装はRuby on RailsでControllerとindex用のviewのみを作成。
その後Vue.jsで実装しています。

説明記事は[こちら](https://qiita.com/kaorina/items/86892081b5e119a11e9d)

## 開発環境について
以下環境にて動作確認済みです。
* Mac OS X EI Capitan (10.11.6)
* Ruby 2.3.0
* Vue.js 2.4.1

### その他環境
* Ruby on Rails 5.0.6
* MySQL2
* BootStrap 4

### config/database.ymlについて
git cloneしたらターミナル上で

```
cp config/database.yml.sample config/database.yml
```
としてからconfig/database.ymlをご自身の環境に応じて編集してください。

### .ruby-versionについて
Rubyのバージョンを変更する場合は.ruby-versionファイルを編集してください。

### データベースの作成について
下記コマンドで行ってください。(テーブルはないのでmigrationは不要です)

```
./bin/rake db:create
```
