import icons from '@/constants/icons';

const Logo = ({
  wrapperClasses,
  textClasses,
}: {
  wrapperClasses: string;
  textClasses?: string;
}) => {
  return (
    <div className={wrapperClasses}>
      <img src={icons.logoIcon} alt='Tourvisto Logo' />
      <span
        className={`${textClasses || 'p-28-bold'}
          font-jakarta text-dark-100 lg:leading-7`}
      >
        Tourvisto
      </span>
    </div>
  );
};

export default Logo;
