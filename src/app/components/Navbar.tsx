import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link href="/course">수강과목</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
