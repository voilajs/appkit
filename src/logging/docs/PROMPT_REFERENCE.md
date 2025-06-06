# `@voilajsx/appkit/logging` LLM API Reference

> **Note**: Implementation is in JavaScript. TypeScript signatures are for
> clarity only.

## LLM Code Generation Guidelines

1.  **Adhere to Code Style**:
    - ESM imports, single quotes, 2-space indentation, semicolons
    - Always include JSDoc comments for functions
2.  **JSDoc Format** (Required for all functions):

    ```javascript
    /**
     * Function description
     * @param {Type} paramName - Parameter description
     * @returns {ReturnType} Return value description
     * @throws {Error} Error conditions
     */
    ```

3.  **Error Handling**:
    - Use try/catch blocks for async functions
    - Check parameters before using them
    - Return standardized error objects
4.  **Framework Agnostic**:
    - Implementation should work with any framework
    - Middleware patterns should be adaptable

## Function Signatures

### createLogger

```typescript
function createLogger(options?: {
  level?: 'error' | 'warn' | 'info' | 'debug';
  defaultMeta?: Record<string, any>;
  transports?: BaseTransport[]; // Updated from Transport[]
  enableFileLogging?: boolean;
  dirname?: string;
  filename?: string;
  retentionDays?: number;
  maxSize?: number;
}): Logger;
```

- Default `level`: `'info'`
- Default `enableFileLogging`: `true`
- Default `dirname`: `'logs'`
- Default `filename`: `'app.log'`
- Default `retentionDays`: `7`
- Default `maxSize`: `10485760` (10MB)

### Logger Methods

```typescript
interface Logger {
  info(message: string, meta?: Record<string, any>): void;
  error(message: string, meta?: Record<string, any>): void;
  warn(message: string, meta?: Record<string, any>): void;
  debug(message: string, meta?: Record<string, any>): void;
  child(bindings: Record<string, any>): Logger;
  flush(): Promise<void>;
  close(): Promise<void>;
}
```

### Transport Classes

```typescript
class ConsoleTransport {
  constructor(options?: {
    level?: 'error' | 'warn' | 'info' | 'debug';
    colorize?: boolean;
    prettyPrint?: boolean;
  });
}

class FileTransport {
  constructor(options?: {
    level?: 'error' | 'warn' | 'info' | 'debug';
    dirname?: string;
    filename?: string;
    retentionDays?: number;
    maxSize?: number;
    datePattern?: string;
  });
}
```

- ConsoleTransport defaults: `colorize: true`, `prettyPrint: false`
- FileTransport defaults: `dirname: 'logs'`, `filename: 'app.log'`,
  `retentionDays: 7`, `maxSize: 10485760` (10MB), `datePattern: 'YYYY-MM-DD'`

## Example Implementations

### Basic Logger Setup

```javascript
/**
 * Creates a logger with default configuration
 * @returns {Object} Logger instance
 */
function setupLogger() {
  const logger = createLogger({
    level: 'info',
    defaultMeta: {
      service: 'api',
      environment: process.env.NODE_ENV,
    },
    dirname: 'logs',
    retentionDays: 7,
  });

  return logger;
}

/**
 * Logs a message with metadata
 * @param {Object} logger - Logger instance
 * @param {string} message - Log message
 * @param {Object} metadata - Additional context
 */
function logMessage(logger, message, metadata = {}) {
  logger.info(message, {
    ...metadata,
    timestamp: new Date().toISOString(),
  });
}
```

### Request Logging Middleware

```javascript
/**
 * Creates Express middleware for request logging
 * @param {Object} logger - Logger instance
 * @returns {Function} Express middleware
 */
function createRequestLogger(logger) {
  // Dummy generateId for example purposes
  const generateId = () => Math.random().toString(36).substring(2, 15);

  return (req, res, next) => {
    const startTime = Date.now();

    // Create request-specific logger
    req.logger = logger.child({
      requestId: req.id || generateId(),
      method: req.method,
      path: req.path,
      ip: req.ip,
    });

    // Log request start
    req.logger.info('Request started');

    // Log response
    res.on('finish', () => {
      const duration = Date.now() - startTime;

      req.logger.info('Request completed', {
        statusCode: res.statusCode,
        duration,
        contentLength: res.get('content-length'),
      });
    });

    next();
  };
}
```

### Error Logging

```javascript
/**
 * Logs an error with context
 * @param {Object} logger - Logger instance
 * @param {Error} error - Error object
 * @param {Object} context - Additional context
 */
function logError(logger, error, context = {}) {
  logger.error('Error occurred', {
    error: error.message,
    stack: error.stack,
    code: error.code,
    ...context,
  });
}

/**
 * Express error handling middleware
 * @param {Object} logger - Logger instance
 * @returns {Function} Express error middleware
 */
function createErrorLogger(logger) {
  return (err, req, res, next) => {
    req.logger = req.logger || logger;

    req.logger.error('Unhandled error', {
      error: err.message,
      stack: err.stack,
      code: err.code,
      method: req.method,
      path: req.path,
    });

    next(err);
  };
}
```

### Child Loggers for Context

```javascript
/**
 * Creates a logger for a specific operation
 * @param {Object} baseLogger - Base logger instance
 * @param {string} operation - Operation name
 * @param {Object} context - Operation context
 * @returns {Object} Child logger
 */
function createOperationLogger(baseLogger, operation, context = {}) {
  // Dummy generateId for example purposes
  const generateId = () => Math.random().toString(36).substring(2, 15);

  return baseLogger.child({
    operation,
    operationId: generateId(),
    ...context,
  });
}

/**
 * Example using child logger
 * @param {Object} logger - Logger instance
 * @param {string} userId - User ID
 * @param {Object} data - User data to update
 * @returns {Promise<Object>} Updated user
 */
async function updateUser(logger, userId, data) {
  // Dummy db object for example
  const db = {
    users: {
      update: async (id, userData) => {
        // Simulate a database update
        return new Promise((resolve) =>
          setTimeout(() => resolve({ id, ...userData }), 50)
        );
      },
    },
  };

  const opLogger = createOperationLogger(logger, 'updateUser', {
    userId,
  });

  opLogger.info('Starting user update');

  try {
    const user = await db.users.update(userId, data);

    opLogger.info('User updated successfully', {
      changes: Object.keys(data),
    });

    return user;
  } catch (error) {
    opLogger.error('User update failed', {
      error: error.message,
      stack: error.stack,
    });
    throw error;
  }
}
```

### Production Logger Configuration

```javascript
import {
  ConsoleTransport,
  FileTransport,
} from '@voilajsx/appkit/logging/transports';
import { createLogger } from '@voilajsx/appkit/logging';
import os from 'os'; // For os.hostname()

/**
 * Creates production-ready logger configuration
 * @param {Object} options - Configuration options
 * @param {string} [options.service='api'] - Service name for default metadata
 * @param {string} [options.logDir='/var/log/app'] - Directory for general logs
 * @param {string} [options.errorLogDir='/var/log/app/errors'] - Directory for error-specific logs
 * @returns {Object} Logger instance
 */
function createProductionLogger(options = {}) {
  const {
    service = 'api',
    logDir = '/var/log/app',
    errorLogDir = '/var/log/app/errors',
  } = options;

  const transports = [
    // Console transport (for container logs)
    new ConsoleTransport({
      colorize: false,
      prettyPrint: false,
    }),

    // General application logs
    new FileTransport({
      dirname: logDir,
      filename: 'app.log',
      retentionDays: 30,
      maxSize: 50 * 1024 * 1024, // 50MB
    }),

    // Error logs with longer retention
    new FileTransport({
      dirname: errorLogDir,
      filename: 'error.log',
      retentionDays: 90,
      level: 'error',
    }),
  ];

  return createLogger({
    level: 'info',
    defaultMeta: {
      service,
      environment: 'production',
      version: process.env.APP_VERSION,
      hostname: os.hostname(), // Added hostname to default meta
      pid: process.pid, // Added pid to default meta
    },
    transports,
  });
}
```

### Log Rotation and Retention

```javascript
import { createLogger } from '@voilajsx/appkit/logging';
import {
  ConsoleTransport,
  FileTransport,
} from '@voilajsx/appkit/logging/transports';
import fs from 'fs';
import path from 'path';

/**
 * Creates logger with custom rotation settings
 * @param {Object} options - Logger options
 * @param {'error' | 'warn' | 'info' | 'debug'} [options.level='info'] - Minimum log level
 * @param {string} [options.dirname='logs'] - Directory for log files
 * @param {number} [options.retentionDays=14] - Days to retain log files
 * @param {number} [options.maxSize=10485760] - Maximum file size in bytes before rotation (10MB)
 * @returns {Object} Logger instance
 */
function createRotatingLogger(options = {}) {
  const {
    level = 'info',
    dirname = 'logs',
    retentionDays = 14,
    maxSize = 10 * 1024 * 1024, // 10MB
  } = options;

  return createLogger({
    level,
    dirname,
    filename: 'app.log',
    retentionDays,
    maxSize,
    enableFileLogging: true,
  });
}

/**
 * Monitor log directory size
 * @param {Object} logger - Logger instance
 * @param {string} dirname - Log directory
 * @returns {Promise<Object>} Directory statistics
 */
async function monitorLogDirectory(logger, dirname = 'logs') {
  const fsPromises = fs.promises; // Use fs.promises directly

  try {
    const files = await fsPromises.readdir(dirname);
    let totalSize = 0;

    for (const file of files) {
      const stats = await fsPromises.stat(path.join(dirname, file));
      totalSize += stats.size;
    }

    const stats = {
      directory: dirname,
      fileCount: files.length,
      totalSize,
      totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
    };

    logger.info('Log directory statistics', stats);

    // Alert if logs are getting too large
    if (totalSize > 1024 * 1024 * 1024) {
      // 1GB
      logger.warn('Log directory size exceeds 1GB', stats);
    }

    return stats;
  } catch (error) {
    logger.error('Failed to monitor log directory', {
      error: error.message,
      directory: dirname,
    });
    throw error;
  }
}
```

### Graceful Shutdown

```javascript
/**
 * Ensures logs are flushed before process exit
 * @param {Object} logger - Logger instance
 * @param {Object} [server] - Optional HTTP server instance to close before logging shutdown
 */
function setupGracefulShutdown(logger, server = null) {
  const handleShutdown = async (signal) => {
    logger.info('Shutdown signal received', { signal });

    try {
      // If an HTTP server is provided, close it first
      if (server && typeof server.close === 'function') {
        await new Promise((resolve, reject) => {
          server.close((err) => {
            if (err) {
              logger.error('Error closing HTTP server:', {
                error: err.message,
                stack: err.stack,
              });
              return reject(err);
            }
            logger.info('HTTP server closed successfully.');
            resolve();
          });
        });
      }

      // Flush all pending logs
      await logger.flush();

      // Close all transports
      await logger.close();

      logger.info('Logger shutdown complete. Exiting process.');
      process.exit(0);
    } catch (error) {
      console.error('Critical error during graceful shutdown:', error); // Use console.error for final critical messages
      process.exit(1);
    }
  };

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));

  // Handle uncaught exceptions
  process.on('uncaughtException', async (error) => {
    logger.error(
      'Uncaught exception detected. Initiating emergency shutdown.',
      {
        error: error.message,
        stack: error.stack,
      }
    );

    // Attempt to flush and close logger, but prepare for forced exit
    await logger.flush();
    await logger.close();
    process.exit(1);
  });
}
```

### Audit Logging

```javascript
/**
 * Creates audit logger for compliance
 * @param {Object} baseLogger - Base logger instance
 * @returns {Object} Audit logger interface
 */
function createAuditLogger(baseLogger) {
  const auditLogger = baseLogger.child({
    audit: true, // Flag to indicate an audit log for custom transports
  });

  return {
    /**
     * Logs user action for audit trail
     * @param {string} action - Action performed (e.g., 'UserLoggedIn', 'PasswordChange')
     * @param {string} userId - User ID related to the action
     * @param {Object} [details={}] - Additional details about the action (e.g., { ip: '...', userAgent: '...' })
     */
    logUserAction(action, userId, details = {}) {
      auditLogger.info('User action', {
        action,
        userId,
        ...details, // Merge details directly
        timestamp: new Date().toISOString(), // Logger automatically adds timestamp, but explicitly adding for audit clarity
      });
    },

    /**
     * Logs data access for compliance
     * @param {string} resource - Resource accessed (e.g., 'CustomerData', 'FinancialRecords')
     * @param {string} userId - User ID who accessed the resource
     * @param {Object} [context={}] - Access context (e.g., { operation: 'read', query: '...' })
     */
    logDataAccess(resource, userId, context = {}) {
      auditLogger.info('Data access', {
        resource,
        userId,
        operation: context.operation || 'read',
        ...context, // Merge context directly
        timestamp: new Date().toISOString(), // Logger automatically adds timestamp, but explicitly adding for audit clarity
      });
    },
  };
}
```

## Code Generation Rules

1.  Always use `createLogger()` with an options object when configuration is
    needed
2.  Use child loggers for request/operation-specific context
3.  Include timestamp in metadata for audit trails (if needed for audit-specific
    transports, otherwise `createLogger` handles it)
4.  Implement proper error handling with try/catch blocks
5.  Close logger instances during graceful shutdown
6.  Use appropriate log levels based on severity
7.  Sanitize sensitive data before logging
8.  Configure file retention based on compliance requirements
