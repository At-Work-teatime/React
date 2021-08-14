import { SearchInput } from '../style/style';
import React from 'react';

function Search() {
  return (
    <div>
      <SearchInput defaultValue="동료의 이름을 검색해 보세요" />
      <hr />
    </div>
  );
}

export default Search;
