const BuildkiteClient = {
  getSinglePipelineMetrics: async (slug) => queryBuildkite(makeGraphQLQuery(singlePipelineMetricsQuery(slug))),
}

const graphQLEndpoint = 'https://graphql.buildkite.com/v1'
const organisationSlug = process.env.ORGANISATION_SLUG

const graphQLQuery = JSON.stringify({
  query: "{ viewer { user { name } } }",
  variables: "{ }"
})

const singlePipelineMetricsQuery = (pipelineSlug) => `
  query GetPipelineInfo {
    pipeline(slug: "${organisationSlug}/${pipelineSlug}") {
      slug
      uuid
      name
      metrics {
        edges {
          node {
            label
            value
          }
        }
      }
    }
  }
`

const makeGraphQLQuery = (query) => JSON.stringify({
  query: query,
  variables: {}
});

async function queryBuildkite (query) {
  const token = process.env.BUILDKITE_API_KEY

  const response = await fetch(graphQLEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: query
  })

  const responseJSON = await response.json()
  return responseJSON
}

export default BuildkiteClient
