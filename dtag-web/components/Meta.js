import Head from 'next/head';

export default function Meta({
  title = 'dTAG',
  description = 'Create, or play decentralized Text Adventure Games'
}) {

  const meta = [
    {
      name: 'description',
      content: description
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* TODO Meta tags */}
      </Head>
    </>
  );
}