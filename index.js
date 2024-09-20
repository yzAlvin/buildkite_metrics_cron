import BuildkiteClient from './buildkite_client.js'
import pipelines from './pipelines.js'
import { objToCsvRow, objToCsvHeader } from './utils.js'

async function main() {
    const pipelineSlugs = pipelines
        .map((pipeline) =>
            pipeline.pipelines
            .map(o => o.slug)
        )
        .flat()

    const data = (await Promise.all(
        pipelineSlugs.map(async (slug) => {
            const { data } = await BuildkiteClient.getSinglePipelineMetrics(slug)
            console.log(data)

                return data.pipeline.metrics.edges.map(({node}) =>
            ({slug: slug, metric_label: node.label, metric_value: node.value, created_at: dateNow()})
            )
        })
        )).flat()

    const header = objToCsvHeader(data[0])
    const rows = data.map((d) => objToCsvRow(d))
    const content = [header, ...rows].join('\n')

    console.log(content)
}

await main()
