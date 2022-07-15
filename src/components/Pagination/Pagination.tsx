interface Props {
    currentPage: number;
    numberOfPages: number;
    paginate(number: number): void;
}



export const Pagination = (props: Props) => {
const pageNumbers: number[]  = [];
for (let i = props.currentPage + 1; i <= props.numberOfPages; ++i){
    pageNumbers.push(i);
    }
    console.log(pageNumbers)

return <nav>

    <ul className="pagination">
        <li className="page-item"><a onClick={() => props.paginate(1)} href="#" className={"page-link"}>First Page</a></li>

        {pageNumbers.map(number => <li key={number} className="page-item"><a onClick={() => props.paginate(number)} href="#" className={"page-link"}>{number}</a></li>)}
        {pageNumbers.length > 0 ? <li className="page-item"><a onClick={() => props.paginate(pageNumbers[pageNumbers.length -1])} href="#" className={"page-link"}>Last Page</a></li> : ''}
    </ul>
</nav>
}