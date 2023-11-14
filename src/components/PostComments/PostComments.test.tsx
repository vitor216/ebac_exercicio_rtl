import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('verifica se foi feito 2 comentarios', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('coment-textarea'), {
            target: {
                value: 'Primeiro comentário',
            }
        });
        fireEvent.click(screen.getByTestId('coment-button'));

        fireEvent.change(screen.getByTestId('coment-textarea'), {
            target: {
                value: 'Segundo comentário',
            }
        });
        fireEvent.click(screen.getByTestId('coment-button'));

        expect(screen.getAllByTestId('coment-element')).toHaveLength(2);
    });
});