# deno-express

## 起動

```shell
deno run -A main.ts 
```
### 確認
```shell
curl http://localhost:8000/
```

## バイナリファイル作成
### コンパイル
- `-A`: 全許可
- `-o`: output先
```shell
deno compile -A -o ./dist/ main.ts
```