# COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._

## Atoms
Atomsは基本的にpropsとして渡したものをレンダリングします。内部でStateなどは持ちません。このような汎用的で抽象性の高いコンポーネント（Atoms）は基本的に自分で実装せず、OSSとして公開されているライブラリを積極的に活用することが望ましいです。
## Molecules
次にMoleculesです。Moleculesの主な役割としては、Atomsのイベントハンドリングです。親コンポーネントから値を受け取り、Atomsとの橋渡し的な役割を担います。

## Organisms
さて、OrganismsではMoleculesやAtomsのイベントハンドリングをし、必要であればVuexなども使います。基本的にAtomsやMoleculesはOSSとして公開してもいいレベルで抽象化しますが、Organismsはドメインに関する処理を入れても構いません。
