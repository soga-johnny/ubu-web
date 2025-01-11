export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">プライバシーポリシー</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. 個人情報の取り扱いについて</h2>
          <p className="text-gray-600 mb-4">
            当店は、お客様の個人情報を適切に取り扱い、保護することが社会的責務であると考え、
            以下の方針に基づき個人情報の保護に努めます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. 個人情報の収集・利用</h2>
          <p className="text-gray-600 mb-4">
            当店は、以下の目的で個人情報を収集・利用いたします：
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>商品の発送</li>
            <li>お支払い手続き</li>
            <li>お問い合わせ対応</li>
            <li>サービス向上のための分析</li>
          </ul>
        </section>

        {/* 他のセクションも同様に追加 */}
      </div>
    </div>
  );
} 