import { FC } from 'react';

type Props = {
  title: string;
}

const Table: FC<Props> = ({ title }) => {
  return (
    <table className='table'>
      <tbody>
        <tr className='table-list'>
          <td className='table-item'>{title}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;
