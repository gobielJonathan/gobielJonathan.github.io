module.exports = {
    exportPathMap: async function (defaultPathMap, { dev, dir, outdir, distdir, builid }) {
        return {
            "/": { page: "/" }
        }
    },
    images: {
        loader: 'default'
    },

}