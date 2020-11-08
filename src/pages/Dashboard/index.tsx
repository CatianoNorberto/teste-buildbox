import React, { useState, FormEvent, useEffect } from 'react';
import { FaWindowClose, FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Header from '../../components/Header';

import uploadFile from '../../assets/image.png';

import {
  Container,
  Form,
  AvatarGroup,
  ButtonsGroup,
  Feeds,
  FeedsBody,
  FeedsContent,
  FeedsTitle,
  AvatarUploaded,
  Error,
  AvatarContainer,
} from './styles';

interface IFeedItem {
  id: number;
  name: string;
  message: string;
  avatar: string;
}

toast.configure({
  autoClose: 3000,
  draggable: false,
});
const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [message, setMessage] = useState('');
  const [edit, setEdit] = useState(false);
  const [itemId, setItemId] = useState(0);
  const [inputError, setInputError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [items, setItems] = useState<IFeedItem[]>(() => {
    const storagedItems = localStorage.getItem(
      '@TesteBuildbox:feed_item',
    );

    if (storagedItems) {
      return JSON.parse(storagedItems);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@TesteBuildbox:feed_item',
      JSON.stringify(items),
    );
  }, [items]);

  // Adiciona uma publicação no vetor de Feeds
  function handleAddFeed(event: FormEvent<HTMLButtonElement>
  ): void {
    event.preventDefault();
    setInputError('');
    setMessageError('');

    if (!name && !message) {
      setInputError('Digite o nome do autor');
      setMessageError('Digite uma mensagem');
      return;
    }

    if (!name) {
      setInputError('Digite o nome do autor');
      return;
    }

    if (!message) {
      setMessageError('Digite uma mensagem');
      return;
    }

    const data = {
      id: Math.random() * 100,
      name,
      message,
      avatar,
    } as IFeedItem;

    try {
      setItems([...items, data]);
      toast.success('Publicação feita com sucesso');
      setName('');
      setAvatar('');
      setMessage('');
    } catch (error) {
      console.log(error);
      toast.success('Erro ao adicionar a publicação');
    }
  }

  // Remove uma publicação do vetor de Feeds e seta um novo vetor no localStorage sem o vetor removido
  function handleRemoveFeed(id: number): void {
    try {
      const newItems = items.filter(item => item.id !== id);
      setItems(newItems);
      toast.success('Publicação removida com sucesso');
    } catch (error) {
      console.log(error);
      toast.success('Erro ao remover a publicação');
    }
  }

  // Descarta uma publicação  e limpa os estados
  const handleCleanFeed = (): void => {
    setName('');
    setMessage('');
    setAvatar('');
  }

  // Cria a url pra o preview da imagem
  function handleSetImagePreview(event: any): void {
    const avatarUrl = URL.createObjectURL(event.target.files[0]);
    setAvatar(avatarUrl);
  };

  // Seta os dados da publicação selecionada para alteração no estado, em função
  const handleSetEditFeedItem = (item: IFeedItem): void => {
    setEdit(!edit);
    if(!edit) {
      setAvatar(item.avatar);
      setName(item.name);
      setMessage(item.message);
      setItemId(item.id);
    }

    if(edit) {
      setAvatar('');
      setName('');
      setMessage('');
      setItemId(0);
    }  
  }

  // Altera os dados de uma publicação no vetor de feeds
  const handleEditFeedItem = (event: FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    const newItems = items.filter(feedItem => {
      if(feedItem.id === itemId) {
        feedItem.avatar = avatar;
        feedItem.name = name;
        feedItem.message = message;
     }

     return feedItem;
   });

   try {
     setItems(newItems);
     toast.success('Publicação alterada com sucesso');
     setAvatar('');
     setName('');
     setMessage('');
     setItemId(0);
     setEdit(false);
   } catch (error) {
     console.log(error);
     toast.error('Erro ao alterar a publicação');
   }
  }

  return (
    <>
      <Header />
      <Container>
        <Form hasError={!!inputError}>
          <AvatarContainer>
            {!avatar ? 
              <AvatarGroup>
                <label htmlFor="avatar">
                  <img src={uploadFile} alt="file" />
                  <input type="file" id="avatar" onChange={(e) => handleSetImagePreview(e)}/>
                </label>
              </AvatarGroup>
             :
              <AvatarUploaded>
                <img src={avatar} alt="Uploaded img" />
                <FaTrash onClick={() => setAvatar('')}/>
              </AvatarUploaded>
            }
          </AvatarContainer>

          <input 
            type="text" 
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          {inputError && <Error>{inputError}</Error>}

          <textarea 
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}  
          >
          </textarea>

          {messageError && <Error>{messageError}</Error>}

          <ButtonsGroup>
            <span onClick={handleCleanFeed}>Descartar</span>
            {edit ? 
              <button type="button" onClick={(e) => handleEditFeedItem(e)}>Salvar alteração</button>
              : 
              <button type="button" onClick={(e) => handleAddFeed(e)}>Publicar</button>
            }
          </ButtonsGroup>
        </Form>

        <FeedsTitle>
          <h5>Feeds</h5>
        </FeedsTitle>

        {items.map(item => (
          <Feeds key={item.id}>
            <div>
              <FaEdit onClick={() => handleSetEditFeedItem(item)} />
              <FaWindowClose onClick={() => handleRemoveFeed(item.id)} />
            </div>
            <FeedsBody>
              <img src={item.avatar} alt={item.name} />
              <FeedsContent>
                <p>{item.message}</p>
                <span>Enviado por</span>
                <strong>{item.name}</strong>
              </FeedsContent>
            </FeedsBody>
          </Feeds>
        ))}

      </Container>
    </>
  );
};

export default Dashboard;
