// export default function Container() {
//     return (
//         <div className="content py-6 h-60 max-w-[1200px] mx-auto w-full ">

//         </div>
//     )
// }

import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-[1200px] mx-auto px-3">
            {children}
        </div>
    );
}
