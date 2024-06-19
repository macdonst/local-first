export default async function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path)
  }
}

function getPageTitle(path) {
  const titleMap = {
    '/': 'Local First'
  }

  return titleMap[path]
}
