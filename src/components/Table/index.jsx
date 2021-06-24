import React from 'react'

export const Table = ({className, children}) => {
  return <table className={className}>
    <tr>
      <td>
        {children}
      </td>
    </tr>
  </table>
}
