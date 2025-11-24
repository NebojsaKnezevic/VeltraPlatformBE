export class CustomError extends Error {
  public code: number;
  public details?: string;

  constructor(message: string, code = 500, details?: string) {
    super(message);     
    this.name = this.constructor.name;
    this.code = code;    
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ValidationError extends CustomError {
  constructor(public message: string, public details?: string) {
    super(message, 400, details);
    this.name = this.constructor.name;
  }
}

export class NotFoundError extends CustomError {
  constructor(public resource: string) {
    super(`Resource ${resource} not found`, 404);
    this.name = this.constructor.name;
  }
}

export class InvalidCredentialsError extends CustomError{
    constructor(public msg: string) {
    super(msg, 401);
    this.name = this.constructor.name;
  }
}

export class DBError extends CustomError {
  constructor(message = "Database error", details?: string) {
    super(message, 500, details);
    this.name = this.constructor.name;
  }
}

