import { renderWithTheme } from 'lib/contexts/tests';
import { ModalBook } from './ModalBook';

const defaultValues = {
  toggleModal: () => undefined,
  showModal: false,
  book: {
    id: '8f41b92c7460b9337660427e',
    title: 'A Culpa é das Estrelas',
    description:
      'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
    authors: ['Jonh Green'],
    pageCount: 288,
    category: 'Romance',
    imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
    isbn10: '0062856626',
    isbn13: '978-0062856623',
    language: 'Inglês',
    publisher: 'Intrínseca',
    published: 2002,
  },
};

describe('<ModalBook />', () => {
  it('should render the Modal', () => {
    const { container } = renderWithTheme(<ModalBook {...defaultValues} />);
  });
});
