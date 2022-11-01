import Link from "next/link";
import ReactMarkdown from "react-markdown";

export const CustomReactMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }
          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
      className="p-4"
    >
      {children}
    </ReactMarkdown>
  );
};
