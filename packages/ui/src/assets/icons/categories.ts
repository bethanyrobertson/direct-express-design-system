// Icon categories for organized imports
// This file provides category-based exports for better organization

// Re-export all SVG icons from the main svg index
export * from './svg';

// Category-specific exports for easier importing
export * as AccessibilityIcons from './svg';
export * as ActionIcons from './svg';
export * as AlertIcons from './svg';
export * as ArrowIcons from './svg';
export * as GeneralIcons from './svg';
export * as DataIcons from './svg';
export * as MappingIcons from './svg';
export * as MoneyIcons from './svg';
export * as SecurityIcons from './svg';

// Common icon aliases for frequently used icons
export { 
  CloseSvg as Close,
  CheckSvg as Check,
  SearchSvg as Search,
  MenuSvg as Menu,
  SettingsSvg as Settings,
  HomeFillSvg as Home,
  PersonSvg as User,
  StarFilledSvg as Star,
  BookmarkFilledSvg as Bookmark,
  NotificationsFilledSvg as Notification,
  LockFilledSvg as Lock,
  WalletSvg as Wallet,
  CardSvg as Card,
  MoneySvg as Money,
  BankSvg as Bank,
  ArrowBackSvg as ArrowBack,
  ArrowForwardSvg as ArrowForward,
  ArrowDropDownSvg as ArrowDown,
  ArrowDropUpSvg as ArrowUp,
  DownloadSvg as Download,
  UploadSvg as Upload,
  ShareSvg as Share,
  DeleteSvg as Delete,
  ContentCutSvg as Edit,
  AddSvg as Add,
  CancelSvg as Remove,
  FavoriteSvg as Favorite,
  VisibilityFilledSvg as Eye,
  VisibilityOffFilledSvg as EyeOff,
  ErrorSvg as Error,
  WarningFilledSvg as Warning,
  HelpFilledSvg as Help,
  HelpFilledSvg as Info
} from './svg';
