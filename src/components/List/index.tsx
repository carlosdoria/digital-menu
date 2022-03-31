interface ListProps {
  items: Array<string>
}


export const List = ({items}:ListProps) => {


  return (
    <div>
      {items.map( item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}

