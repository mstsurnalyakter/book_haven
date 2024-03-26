import useAuthorData from '../../Hooks/useAuthorData';
import AuthorCard from '../AuthorCard/AuthorCard';

const AuthorsData = () => {
    const { authors, loading } = useAuthorData();

  return (
    <div>
      <h1
        className="text-[#131313] text-center mb-9 text-4xl font-bold
      "
      >
        Authors
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {authors.map((author,index) => (
          <AuthorCard key={index} author={author} />
        ))}
      </div>
    </div>
  );
}

AuthorsData.propTypes = {}

export default AuthorsData