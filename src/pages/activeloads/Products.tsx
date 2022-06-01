import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import classNames from 'classnames';
import { Column } from 'react-table';
import { PageTitle, Table, CellFormatter, PageSize } from 'components';
import { Product } from './types';
import { products } from './data';

/* product column render */
const ProductColumn = ({ row }: CellFormatter<Product>) => {
    const rating = row.original.rating;
    const emptyStars = rating < 5 ? 5 - rating : 0;
    return (
        <>
            <img
                src={row.original.image}
                alt={row.original.name}
                title={row.original.name}
                className="rounded me-3"
                height="48"
            />
            <p className="m-0 d-inline-block align-middle font-16">
                <Link to="/apps/ecommerce/details" className="text-body">
                    {row.original.name}
                </Link>
                <br />
                {[...Array(rating)].map((x, index) => (
                    <span key={index.toString()} className="text-warning mdi mdi-star"></span>
                ))}
                {[...Array(emptyStars)].map((x, index) => (
                    <span key={index.toString()} className="text-warning mdi mdi-star-outline"></span>
                ))}
            </p>
        </>
    );
};

/* status column render */
const StatusColumn = ({ row }: CellFormatter<Product>) => {
    return (
        <span
            className={classNames('badge', {
                'bg-success': row.original.status,
                'bg-danger': !row.original.status,
            })}
        >
            {row.original.status ? 'Active' : 'Deactivated'}
        </span>
    );
};

/* action column render */
const ActionColumn = ({ row }: CellFormatter<Product>) => {
    return (
        <>
            <Link to="#" className="action-icon">
                {' '}
                <i className="mdi mdi-eye"></i>
            </Link>
            <Link to="#" className="action-icon">
                {' '}
                <i className="mdi mdi-square-edit-outline"></i>
            </Link>
            <Link to="#" className="action-icon">
                {' '}
                <i className="mdi mdi-delete"></i>
            </Link>
        </>
    );
};

// get all columns
const columns: ReadonlyArray<Column> = [
    {
        Header: 'DRIVER',
        accessor: 'name',
        defaultCanSort: true,
        Cell: ProductColumn,
    },
    {
        Header: 'LOAD',
        accessor: 'category',
        defaultCanSort: true,
    },
    {
        Header: 'STATUS',
        accessor: 'status',
        defaultCanSort: true,
    },
    {
        Header: 'FROM',
        accessor: 'from',
        defaultCanSort: true,
    },
    {
        Header: 'TO',
        accessor: 'to',
        defaultCanSort: true,
    },
    {
        Header: 'DATE',
        accessor: 'added_date',
        defaultCanSort: true,
    },
    // {
    //     Header: 'Action',
    //     accessor: 'action',
    //     defaultCanSort: false,
    //     Cell: ActionColumn,
    // },
];

// get pagelist to display
const sizePerPageList: PageSize[] = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '20',
        value: 20,
    },
    {
        text: 'All',
        value: products.length,
    },
];

const Products = () => {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Table<Product>
                                columns={columns}
                                data={products}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                theadClass="table-light"
                                searchBoxClass="mb-2"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Products;
