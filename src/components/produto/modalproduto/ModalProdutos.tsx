import 'reactjs-popup/dist/index.css';
import FormProduto from '../formproduto/FormProduto';
import Popup from 'reactjs-popup';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='border rounded px-4 py-2 bg-indigo-500 hover:bg-indigo-800'>
                        Novo Produto
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;