import { article } from "@styled-system/patterns";
import { Heading } from "../ui";

type HeadingTag = `h${1 | 2 | 3 | 4 | 5}`;

export function createHeadings(): Record<HeadingTag, React.FC<any>> {
  return {
    h1: (props) => (
      <Heading
        className={article({ spacing: "inherit" })}
        as="h1"
        fontSize={["xl", "2xl", "4xl"]}
        mt={8}
        mb={4}
        {...props}
      />
    ),
    h2: (props) => (
      <Heading
        className={article({ spacing: "inherit" })}
        as="h2"
        fontSize={["xl", "2xl", "3xl"]}
        mt={8}
        mb={4}
        {...props}
      />
    ),
    h3: (props) => (
      <Heading
        className={article()}
        as="h3"
        fontSize={["lg", "lg", "2xl"]}
        mt={4}
        mb={2}
        {...props}
      />
    ),
    h4: (props) => (
      <Heading
        className={article()}
        as="h4"
        mt={4}
        mb={2}
        fontSize={["md", "lg", "xl"]}
        {...props}
      />
    ),
    h5: (props) => (
      <Heading
        className={article()}
        as="h5"
        mt={2}
        mb={2}
        fontSize={["md", "md", "lg"]}
        {...props}
      />
    ),
  };
}
