# udemy-react-hooks-complete

<https://www.udemy.com/course/react-hooks-complete-course/>

## 技術スタック

- [Vite](https://ja.vite.dev/)
- [React](https://ja.react.dev/)
- [TypeScript](https://www.typescriptlang.org/ja/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/)
- [SWR](https://swr.vercel.app/ja)

## 開発

### 1. 依存関係のインストール

プロジェクトの依存関係をインストールします。

``` bash
npm install
```

### 2. 開発サーバーの起動

Vite開発サーバーを起動します。  
ファイルの変更を監視し、自動的にブラウザを更新します。

``` bash
npm run dev
```

### 3. 型チェック

TypeScriptによる型チェックを実行します。

``` bash
npm run type-check
```

### 4. 本番用ビルド

本番用のアプリケーションを`dist`ディレクトリにビルドします。  
ビルドの前に型チェックが実行されます。

``` bash
npm run build
```

### 5. 本番用プレビュー

ビルドされたアプリケーションをローカルでプレビューします。  

``` bash
npm run preview
```

### 6. コードの自動修正

[Biome](https://biomejs.dev/)を使い、リントエラーやフォーマットの問題を自動で修正します。

``` bash
npm run format
```

### 7. ビルド成果物の削除

`dist`ディレクトリを削除します。

``` bash
npm run clean
```
