import Head from 'next/head'
import Link from 'next/link'
import gitHubApiKey from '../../access/githubAPI'
import { request, GraphQLClient, gql } from 'graphql-request'
export default function GitHub({ data }) {
  const repos = data['viewer']['contributionsCollection']['commitContributionsByRepository'];
  return (
    <>
    <Head>
      <title>Dustin's GitHub Stats</title>
    </Head>
    <p>
      Total Commits: {data['viewer']['contributionsCollection']['totalCommitContributions']}
    </p>
    <div>
      {repos.map((repo) => {
        return (
          <p>
            {repo['repository']['name']}      {repo['contributions']['totalCount']}
          </p>
        )
      })}
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const endpoint = 'https://api.github.com/graphql';
  const query = gql`{
    viewer {
      contributionsCollection{
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        commitContributionsByRepository{
          contributions{
            totalCount
          }
          repository{
            name
          }
        }
      }
    }
  }`;

  const client = new GraphQLClient(endpoint, { headers: {
    authorization: `Bearer ${gitHubApiKey}`,
  } });

  return client.request(query)
    .then((data) => {
      return { props: { data }};})
    .catch((err) => {
       console.log(JSON.stringify(err));
    });
}