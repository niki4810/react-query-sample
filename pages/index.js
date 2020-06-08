
import Link from "next/link";
import {useQuery, queryCache} from "react-query";
import {PAGE_KEY as FOO_PAGE_KEY} from "./foo";
import Base from "../components/base";
import {fetchData} from "../utils";

export const PAGE_KEY = "BAR";
const Bar = () => {
const {status, data = {}} = useQuery([PAGE_KEY, {id: 2}], fetchData, {
  onSuccess: (result = {}) => {
    const {friends = []} = result;
    const fooData = friends.find((friend) => friend.id === 1);
    if(fooData) {
      queryCache.setQueryData([FOO_PAGE_KEY, {id: 1}], fooData);
    }
  }
});

 return (
   <Base status={status} data={data}>
     <Link href="/foo">
      <a>Go to Page Foo --&gt;</a>
     </Link>
   </Base>
 )
}

export default Bar;