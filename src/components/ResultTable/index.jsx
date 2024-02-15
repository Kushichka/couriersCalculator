import { Table } from "antd";
import PropTypes from 'prop-types';

export const ResultTable = ({ data }) => {

    return (
        <Table dataSource={data} pagination={{ position: ["none", "none"] }}>
            <Table.Column title='Kurier' dataIndex='courier' key='courier' />
            <Table.Column title='Cena' dataIndex='price' key='price' />
        </Table>
    )
};

ResultTable.propTypes = {
    data: PropTypes.array.isRequired,
};


