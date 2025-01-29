export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/green_info' : '';
};

export const withBasePath = (path: string) => {
  const basePath = getBasePath();
  // If path starts with http or https, return as is
  if (path.startsWith('http')) {
    return path;
  }
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}; 