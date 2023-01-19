import Head from 'next/head'
// import { Inter } from '@next/font/google'
import Typography from '@/components/UIKit/Typography'
import FlexBox from '@/components/UIKit/FlexBox'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      <title>My page</title>
      </Head>
      <main>
        {/* <FlexBox flexDirection='columnReverse'>
        <Typography level={2}>
          does it work
        </Typography>
        <Typography level={3}>
          does it work
        </Typography>
        <Typography level={4}>
          does it work
        </Typography>
        </FlexBox> */}
      </main>
    </>
  )
}
