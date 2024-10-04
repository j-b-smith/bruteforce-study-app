import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";

interface NavBarLinkProps {
  href: string;
  label: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = memo(({ href, label }) => {
  return (
    <Link href={href} passHref>
      <Text
        as="a"
        fontWeight="medium"
        _hover={{ color: "purple.300", transform: "scale(1.05)" }}
        transition="all 0.2s ease-in-out"
        cursor="pointer"
      >
        {label}
      </Text>
    </Link>
  );
});

NavBarLink.displayName = "NavBarLink";

export default NavBarLink;
