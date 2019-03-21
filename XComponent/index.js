import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
const DATE_FORMAT = 'yyyy-MM-dd'

export default function XComponent(props) {
  const x = dateFnsFormat(new Date(), DATE_FORMAT)
  const y = dateFnsParse('1983-03-13', DATE_FORMAT, new Date())
  return <div>{x}{y}</div>
}
