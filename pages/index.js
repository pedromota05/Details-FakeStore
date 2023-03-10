import axios from "axios";
import { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import { Cabecalho } from '../components/Cabecalho';
import { Footer } from '../components/Footer';
import Pagination from "../components/Pagination";
import { CardsProduct } from "../components/Cards-product";
import { Lista } from '../components/Lista';
import { Fake_store_img } from "../components/Fake_store_img";

export default function Home({users}) {
  const [posts, setPosts] = useState([]);
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
      const getPosts = async () => {
        const { data: res } = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setPosts(res);
      };
      getPosts();
    }, []);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    
    const handleDelete = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id ))
    }

    const paginatePosts = paginate(posts, currentPage, pageSize);

  return (
    <>
      <Cabecalho />
      <Fake_store_img/>
      <CardsProduct />
      <Lista 
        teste = {paginatePosts}  
      />
        <Pagination
          items={posts.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}

export async function getServerSideProps(context){
  const response = await axios.get(
      'https://fakestoreapi.com/products'
  );
  const data = await response.data;

  return {
      props: {users:data}, 
  }
}
