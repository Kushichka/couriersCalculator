import { Table } from "antd";
import PropTypes from 'prop-types';

export const ResultTable = ({ data }) => {
    return (
        <Table 
            dataSource={data} 
            pagination={{ position: ["none", "none"] }}
            style={{flex: '1 1 0', minWidth: 'calc(375px - (32px * 2) - (24px * 2))'}}
        >
            <Table.Column title={<span style={{fontSize: '1rem'}}>Kurier</span>} dataIndex='courier' key='courier' />
            <Table.Column title='Cena' dataIndex='price' key='price' />
            <Table.Column title='Typ' dataIndex='type' key='type' />
        </Table>
    )
};

ResultTable.propTypes = {
    data: PropTypes.array.isRequired,
};


