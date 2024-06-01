type DeprecationReasonType = {
  reason: string;
  newMethod: string;
};

function DeprecatedMethod({ reason, newMethod }: DeprecationReasonType) {
  return function <T, A extends any[], R>(
    originalMethod: (...args: A) => R,
    context: ClassMethodDecoratorContext<T, (...args: A) => R>
  ): (this: T, ...args: A) => R {
    if (context.kind !== 'method') throw new Error('Method-only decorator');

    function replacementMethod(this: T, ...args: A): R {
      console.log(`${String(context.name)} is deprecated. Reason: ${reason}. Please use ${newMethod} instead.`);

      return originalMethod.apply(this, args);
    }

    return replacementMethod;
  };
}

const MAX_LENGTH = 10;
const MIN_LENGTH = 1;
const EMAIL_TEMPLATE = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

function minLengthCheck<T, R>(
  originalMethod: (value: string) => R,
  context: ClassMethodDecoratorContext<T, (value: string) => R>
): (this: T, value: string) => R {
  if (context.kind !== 'method') throw new Error('Method-only decorator');

  function replacementMethod(this: T, value: string): R {
    if (value.length < MIN_LENGTH) {
      console.warn(`Value length should be more than ${MIN_LENGTH}!`);
    }
    return originalMethod.apply(this, [value]);
  }
  return replacementMethod;
}

function maxLengthCheck<T, R>(
  originalMethod: (value: string) => R,
  context: ClassMethodDecoratorContext<T, (value: string) => R>
): (this: T, value: string) => R {
  if (context.kind !== 'method') throw new Error('Method-only decorator');

  function replacementMethod(this: T, value: string): R {
    if (value.length > MAX_LENGTH) {
      console.warn(`Value length should be less than ${MAX_LENGTH}!`);
    }
    return originalMethod.apply(this, [value]);
  }
  return replacementMethod;
}

function EmailCheck<T, R>(
  originalMethod: (value: string) => R,
  context: ClassMethodDecoratorContext<T, (value: string) => R>
): (this: T, value: string) => R {
  if (context.kind !== 'method') throw new Error('Method-only decorator');

  function replacementMethod(this: T, value: string): R {
    if (!value.match(EMAIL_TEMPLATE)) {
      console.warn(`Email is invalid!`);
    }
    return originalMethod.apply(this, [value]);
  }
  return replacementMethod;
}
