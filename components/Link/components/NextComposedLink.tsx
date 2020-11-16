import NextLink, { LinkProps } from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * NextComposedLink
 */
const NextComposedLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ as, href, ...rest }, ref) => (
    <NextLink href={href} as={as}>
      <a ref={ref} {...rest} />
    </NextLink>
  )
);

NextComposedLink.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default NextComposedLink;
