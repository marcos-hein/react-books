import { useState } from 'react';
import { Button, Input } from '..';
import './Form.css';
import { Book } from '../../redux/booksSlice';

type FieldState = {
  value: string;
  error: boolean;
};

type FormData = {
  [K in keyof Omit<Book, 'id' | 'rented'>]: FieldState;
};

type FormProps = {
  onSubmit: (book: Book) => void;
  initialFormData?: FormData;
};

const defaultFormData: FormData = {
  title: { value: '', error: false },
  author: { value: '', error: false },
  imageUrl: { value: '', error: false },
  releaseYear: { value: '', error: false },
  pageCount: { value: '', error: false },
  summary: { value: '', error: false },
};

export function Form({ onSubmit, initialFormData = defaultFormData }: FormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: {
        value,
        error: false,
      },
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Valida se os campos estão preenchidos
    const formDataEntries = Object.entries(formData).map(([key, field]) => {
      if (!field.value.length) {
        return [key, { ...field, error: true }];
      }
      return [key, field];
    });
    const newFormData: FormData = Object.fromEntries(formDataEntries);

    const hasError = Object.values(newFormData).some((field) => field.error);
    if (hasError) {
      setFormData(newFormData);
      return;
    }

    const newBook: Book = Object.entries(newFormData).reduce((acc, [key, field]) => {
      return {
        ...acc,
        [key]: field.value,
      };
    }, {} as Book);

    onSubmit(newBook);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        name="title"
        value={formData.title.value}
        error={formData.title.error}
        type="text"
        label="Titulo"
        placeholder="Ex: O Hobbit"
        onChange={handleChange}
      />
      <Input
        name="author"
        value={formData.author.value}
        error={formData.author.error}
        type="text"
        label="Autor"
        placeholder="Ex: Tolkien"
        onChange={handleChange}
      />
      <Input
        name="imageUrl"
        value={formData.imageUrl.value}
        error={formData.imageUrl.error}
        type="url"
        label="Link da Imagem"
        placeholder="Ex: https://imagem.com"
        onChange={handleChange}
      />
      <Input
        name="releaseYear"
        value={formData.releaseYear.value}
        error={formData.releaseYear.error}
        type="number"
        label="Ano de Lançamento"
        placeholder="Ex: 1937"
        onChange={handleChange}
      />
      <Input
        name="pageCount"
        value={formData.pageCount.value}
        error={formData.pageCount.error}
        type="number"
        label="Número de Páginas"
        placeholder="Ex: 310"
        onChange={handleChange}
      />
      <Input
        name="summary"
        value={formData.summary.value}
        error={formData.summary.error}
        type="text"
        label="Resumo"
        placeholder="Summary"
        onChange={handleChange}
      />

      <Button type="submit" isFullWidth>
        Criar
      </Button>
    </form>
  );
}
