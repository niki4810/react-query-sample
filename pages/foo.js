
import Link from "next/link";
import {useQuery, queryCache} from "react-query";
import {PAGE_KEY as FOO_PAGE_KEY} from "./foo";
import Base from "../components/base";
import {fetchData} from "../utils";

export const PAGE_KEY = "FOO";
const Foo = () => {
const {status, data = {}} = useQuery([PAGE_KEY, {id: 1}], fetchData);

 return (
   <Base status={status} data={data}>
     <Link href="/">
      <a>&lt;-- Go to Page Bar</a>
     </Link>
   </Base>
 )
}

export default Foo;