import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getPosts, getPostAndMorePosts } from "@/lib/api/post";
import markdownToHtml from "@/lib/markdownToHtml";
import MainLayout from "@/components/layouts/MainLayout";
import PostLayout from "@/components/layouts/PostLayout";

export default function PostPage({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <MainLayout>
        {!router.isFallback && (
          <>
            <PostLayout post={post} morePosts={morePosts} />
          </>
        )}
      </MainLayout>
    </>
  );
}

export async function getStaticProps({ params, query, preview = null }) {
  const data = await getPostAndMorePosts({
    slug: params.slug, 
    preview,
  })
  const htmlContent = await markdownToHtml(data?.posts[0]?.content || "")

  return {
    props: {
      post: {
        ...data?.posts[0],
        content: htmlContent,
      },
      morePosts: data?.morePosts,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const lastPosts = await getPosts({
    limit: 10,
  })
  return {
    paths: lastPosts?.map((post) => `/post/${post.slug}`) || [],
    fallback: true,
  }
}
